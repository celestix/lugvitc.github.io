import { useRef, useState } from 'react';
import styles from './Card.module.css';
import ChallengeModal from '../challengeModal/ChallengeModal';

export default function Card({ challenge, isSolved }) {
    const [questionModalOpen, setQuestionModalOpen] = useState(false);
    const modalRef = useRef(null);

    function openQuestionModal() {
        if (modalRef.current) {
            setQuestionModalOpen(true);
            modalRef.current.showModal();
        }
    }

    return (
        <>
            <ChallengeModal
                challenge={challenge}
                modalRef={modalRef}
                questionModalOpen={questionModalOpen}
                setQuestionModalOpen={setQuestionModalOpen}
                isSolved={isSolved}
            />
            <div className={styles.card} onClick={openQuestionModal}>
                {isSolved && 'done'}
                <div className={styles.header}>
                    <h2>{challenge.name}</h2>
                    <div>Points | {challenge.points}</div>
                </div>
                <div className={styles.description}>
                    {challenge.description}
                </div>
            </div>
        </>
    );
}

