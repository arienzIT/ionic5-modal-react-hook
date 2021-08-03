import { FC } from 'react';
declare const ModalProvider: FC;
/**
 * Need to use this hook in order to have the possibility to use Redux store inside modals
 */
declare const useModal: () => any;
export { ModalProvider, useModal };
