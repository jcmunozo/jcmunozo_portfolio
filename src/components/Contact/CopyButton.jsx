import React, { useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

import styles from './CopyButton.module.css'

export const CopyButton = ({ text = "Copy text" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={styles.copyContainer}>
      <button onClick={handleCopy} className={styles.copyButton} title="Copy email">
	{copied ? <FaCheck /> : <FaRegCopy />}
      </button>
    </div>
  );
};
