import { createContext, FC, useState, useContext, ReactElement } from 'react'
import { IonModal } from '@ionic/react'

const ModalContext = createContext<any>(undefined)

const ModalProvider: FC = ({ children }) => {
    const [visible, setVisible] = useState(false)
    const [content, setContent] = useState<ReactElement>()

    const showModal = (component: ReactElement) => {
        setContent(component)
        setVisible(true)
    }

    const hideModal = () => {
        setContent(undefined)
        setVisible(false)
    }
    return (
        <ModalContext.Provider value={{ content, showModal, hideModal }}>
            <IonModal onDidDismiss={hideModal} isOpen={visible}>{content}</IonModal>
            {children}
        </ModalContext.Provider>
    )
}
/**
 * Need to use this hook in order to have the possibility to use Redux store inside modals
 */
const useModal = (): any => {
    const { showModal, hideModal } = useContext(ModalContext)
    return { showModal, hideModal }
}

export { ModalProvider, useModal }
