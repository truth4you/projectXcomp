import styles from "styles/components/progress.module.scss"; // Page styles
interface Prop {
    maxAmount: number;
    leftAmount: number;
    limitedAmount: number;
}

export default function Progress({ maxAmount, leftAmount, limitedAmount}:Prop){
    const progress = (maxAmount-leftAmount)*100/maxAmount
    return (
        <div className={styles.progress}>
            <div className="flex flex-wrap min-h-0">
                <div className="w-full">
                    <p>0</p>
                </div>
                <div className="text-center w-full">
                    <p>{leftAmount} left</p>
                </div>
                <div className="text-right w-full">
                    <p>{maxAmount}</p>
                </div>
            </div>
            <div className="grow-0 shrink-0 basis-full w-full relative block min-h-0">
                <div className={styles.progressBar}>
                    <div style={{width: `${progress}%`, position: "absolute", height: "100%", backgroundColor: "red"}}></div>
                </div>
            </div>
            <div className="grow-0 shrink-0 basis-full w-full text-center small">
                <p className="mb-1 font-bold uppercase text-xs">Max {limitedAmount} tickets per person</p>
            </div>
        </div>
    )
}