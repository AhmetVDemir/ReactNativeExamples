import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCard from './ElevatedCard'
import FancyCard from './FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

      <FlatCards />
      <ElevatedCard />
      <FancyCard />

      </ScrollView>
    </SafeAreaView>
  )
}

export default App