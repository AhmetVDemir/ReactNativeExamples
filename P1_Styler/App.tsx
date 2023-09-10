import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCard from './ElevatedCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

      <FlatCards />
      <ElevatedCard />

      </ScrollView>
    </SafeAreaView>
  )
}

export default App