
import React from 'react';
import { Button, Result } from 'antd';
import styles from '@/styles/index.module.scss';
export default function ErrorPage() {
  return (
    <>
      <div className='wh-full flex-center'>
        {/* <Login /> */}
        <Result
          className={styles.antd}
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    </>
  );
}

