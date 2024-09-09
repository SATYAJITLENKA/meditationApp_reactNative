import { View, Text } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const Naturemeditate = () => {
  return (
    <View className='flex-1'>
     <AppGradient colors={["#161b2e" , "#0a4d4a" , "#766e67"]}>
      <View className='mb-6'>
        <Text className='mb-3 font-bold text-4xl text-left text-gray-200'>Welcome Satya</Text>
        <Text className='text-indigo-100 text-xl font-medium'>Start Your meditation Practice Today</Text>
      </View>
     </AppGradient>
    </View>
  )
}

export default Naturemeditate