import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from './redux/store'
import AppContainer from './components/AppContainer'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

// import { SwipeListView } from 'react-native-swipe-list-view';
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native'

// export default class App extends React.Component {
//   state = {
//     listViewData: Array(20)
//       .fill("")
//       .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
//   }

//   render() {
//     return (
//         <SwipeListView
//             data={this.state.listViewData}
//             renderItem={ (data, rowMap) => (
//                 <View style={styles.rowFront}>
//                     <Text>I am {data.item.text} in a SwipeListView</Text>
//                 </View>
//             )}
//             renderHiddenItem={ (data, rowMap) => (
//                 <View style={styles.rowBack}>
//                     <Text>Left</Text>
//                     <Text>Right</Text>
//                 </View>
//             )}
//             rightOpenValue={-75}
//             stopLeftSwipe={true}
//         />
//     )
// }
// }

// const styles = StyleSheet.create({
//   rowFront: {
//     backgroundColor: 'red',
//     color: 'red'
//   },
//   rowBack: {
//     backgroundColor: 'blue',
//     color: 'blue'
//   }
// })