import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  // Placeholder user data
  const user = {
    name: 'Farhan',
    email: 'farhan@example.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    watchlistCount: 3,
    favoritesCount: 9,
  };

  const menuItems = [
    { id: 'edit', title: 'Edit Profile', icon: '👤' },
    { id: 'settings', title: 'App Settings', icon: '⚙️' },
    { id: 'notifications', title: 'Notifications', icon: '🔔' },
    { id: 'logout', title: 'Log Out', icon: '🚪', isDanger: true },
  ];

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerClassName="items-center py-6">
        
        {/* Profile Header */}
        <View className="items-center mb-6">
          <Image 
            source={{ uri: user.avatar }} 
            className="w-24 h-24 rounded-full border-2 border-primary mb-3"
          />
          <Text className="text-xl font-bold text-light-100">{user.name}</Text>
          <Text className="text-sm text-light-300">{user.email}</Text>
        </View>

        {/* User Stats Banner */}
        <View className="flex-row justify-around w-11/12 bg-dark-200 rounded-2xl p-4 mb-6 shadow-md">
          <View className="items-center">
            <Text className="text-xl font-bold text-white">{user.watchlistCount}</Text>
            <Text className="text-xs text-white mt-1">Watchlist</Text>
          </View>
          <View className="w-[1px] bg-dark-300" />
          <View className="items-center">
            <Text className="text-xl font-bold text-white">{user.favoritesCount}</Text>
            <Text className="text-xs text-white mt-1">Favorites</Text>
          </View>
        </View>

        {/* Settings Menu Options */}
        <View className="w-11/12 bg-dark-200 rounded-2xl p-2">
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={item.id}
              className={`flex-row items-center justify-between p-4 ${
                index !== menuItems.length - 1 ? 'border-b border-dark-300' : ''
              }`}
            >
              <View className="flex-row items-center space-x-3">
                <Text className="text-lg">{item.icon}</Text>
                <Text className={`text-base font-medium ${item.isDanger ? 'text-red-500' : 'text-light-200'}`}>
                  {item.title}
                </Text>
              </View>
              <Text className="text-light-300 text-sm">›</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}