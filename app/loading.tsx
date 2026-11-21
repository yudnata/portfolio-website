import PageLoadingIndicator from '@/components/ui/PageLoadingIndicator';
import styles from '@/components/ui/page-loading.module.css';

export default function Loading() {
  return (
    <div data-page-loading role="status" className={styles.fallback}>
      <PageLoadingIndicator />
    </div>
  );
}
