import useTest from "@/components/useTest";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import TEST_GROUPS from "../TEST_GROUPS";

export default function Home() {
  const { data = {} } = useTest();

  return (
    <div className={styles.testList}>
      {TEST_GROUPS.map(({ start, end, testGroupId }) => {
        const reviewCount = data?.[testGroupId]?.length || 0;
        return (
          <div className={styles.test} key={testGroupId}>
            {`${start}-${end}`}
            <Link className={styles.link} href={`/test/${testGroupId}?testId=${start}`}>
              <button className={styles.link}>All</button>
            </Link>
            <Link className={styles.link} href={`/test/${testGroupId}?testId=${start}?isReview=true`}>
              <button className={`${styles.link} contrast`} disabled={reviewCount === 0}>
                R-{reviewCount}
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
