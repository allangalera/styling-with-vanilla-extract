import { ReactNode } from "react"
import * as styles from './index.css'

type TextProps = {
    children: ReactNode;
}

export const Text = ({children}: TextProps) => {
    return <p className={styles.container}>{children}</p>
}