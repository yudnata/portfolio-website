import styles from './page-loading.module.css';

export default function PageLoadingIndicator() {
  return (
    <span className={styles.indicator}>
      <svg className={styles.spinner} viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
        <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2" opacity="0.18" />
        <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="34 86" />
      </svg>
      <span className={styles.label}>Loading...</span>
    </span>
  );
}
