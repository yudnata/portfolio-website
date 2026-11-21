export function waitForPageBackground(root: Document, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    if (signal.aborted) { resolve(); return; }
    const cleanups: (() => void)[] = [];
    let finished = false;
    let decoding = false;
    const observer = new MutationObserver(check);
    const timeout = setTimeout(finish, 400);

    function isRendered(element: Element) {
      return element.getClientRects().length > 0;
    }

    function finish() {
      if (finished) return;
      finished = true;
      clearTimeout(timeout);
      observer.disconnect();
      signal.removeEventListener('abort', finish);
      cleanups.forEach((cleanup) => cleanup());
      resolve();
    }

    function check() {
      if (finished || decoding) return;
      if (Array.from(root.querySelectorAll('[data-page-loading]')).some(isRendered)) return;
      const images = Array.from(root.querySelectorAll<HTMLImageElement>('[data-page-background="active"] img')).filter(isRendered);
      if (images.length === 0 && !Array.from(root.querySelectorAll('main')).some(isRendered)) return;
      decoding = true;
      observer.disconnect();
      void Promise.all(images.map((image) => new Promise<void>((ready) => {
        let settled = false;
        function done() {
          if (settled) return;
          settled = true;
          image.removeEventListener('load', loaded);
          image.removeEventListener('error', done);
          ready();
        }
        function loaded() {
          void image.decode().catch(() => {}).then(done);
        }
        cleanups.push(done);
        if (image.complete && image.dataset.loaded === 'true') done();
        else if (image.complete) loaded();
        else {
          image.addEventListener('load', loaded, { once: true });
          image.addEventListener('error', done, { once: true });
        }
      }))).then(finish);
    }

    signal.addEventListener('abort', finish, { once: true });
    observer.observe(root.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-page-loading', 'data-page-background', 'hidden', 'style'] });
    check();
  });
}
