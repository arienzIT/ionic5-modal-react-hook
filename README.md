# Ionic modal React hook
This package has been created to avoid modals to be opened through react portals, losing the possibility of using other application providers (e.g. Redux store) inside the rendered component.

## How to use it
1. Install the package by running:
``` bash
npm install ionic5-modal-react-hook`
```
2. Add the provider in your `App.tsx` file
```tsx
//...
import { ModalProvider } from 'ionic5-modal-react-hook'

export const App = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <ModalProvider>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </ModalProvider>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);
```
3. Use the hook methods wherever you need
```tsx
import { useModal } from 'ionic5-modal-react-hook'

export const Home: React.FC = () => {
    const { showModal } = useModal()
    const displayModal = () => {
        showModal(<SampleComponent />)
    }
  return (
    <IonPage>
      <IonContent>
        <button onClick={displayModal}>show modal</button>
      </IonContent>
    </IonPage>
  );
};
```

## Needed improvements
* Add the possibility of customizing main `IonModal` props
* Add tests
* Change the way in which component is passed to the `showModal` method by passing two separated parameters:
    * the component to be rendered
    * the props to be passed to the component

