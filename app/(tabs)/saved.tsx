import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: string;
  year: string;
}

const { width } = Dimensions.get('window');
const columnWidth = (width - 48) / 2; // Computes equal layout width with side padding

export default function SavedScreen() {
  // Mock data for saved movies
  const [savedMovies, setSavedMovies] = useState<Movie[]>([
    { id: '1', title: 'Interstellar', poster: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', rating: '8.6', year: '2014' },
    { id: '2', title: 'Inception', poster: 'https://image.tmdb.org/t/p/original/iQUateaYbt0Zbjrl8gqaGlT56iG.jpg', rating: '8.8', year: '2010' },
    { id: '3', title: 'The Dark Knight', poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg', rating: '9.0', year: '2008' },
  ]);

  const handleRemove = (id: string) => {
    setSavedMovies(prev => prev.filter(movie => movie.id !== id));
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <View style={{ width: columnWidth }} className="bg-dark-200 rounded-2xl m-2 overflow-hidden shadow-lg border border-dark-300">
      <Image source={{ uri: item.poster }} className="w-full h-56 object-cover" />
      
      {/* Rating Tag */}
      <View className="absolute top-2 right-2 bg-dark-100/80 px-2 py-1 rounded-md">
        <Text className="text-accent text-xs font-bold">⭐ {item.rating}</Text>
      </View>

      <View className="p-3 justify-between flex-1">
        <View>
          <Text className="text-light-100 font-semibold text-sm mb-1" numberOfLines={1}>{item.title}</Text>
          <Text className="text-light-300 text-xs mb-3">{item.year}</Text>
        </View>

        <TouchableOpacity 
          onPress={() => handleRemove(item.id)}
          className="bg-dark-300 border border-primary/30 py-2 rounded-xl items-center"
        >
          <Text className="text-primary text-xs font-medium">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-primary px-2">
      <View className="p-4">
        <Text className="text-2xl font-bold text-light-100">Saved Movies</Text>
        <Text className="text-xs text-light-300 mt-1">Your personal watchlist collections</Text>
      </View>

      {savedMovies.length > 0 ? (
        <FlatList
          data={savedMovies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerClassName="pb-6"
          showsVerticalScrollIndicator={false}
        />
      ) : (
        /* Empty Watchlist State */
        <View className="flex-1 justify-center items-center px-6">
          <Text className="text-4xl mb-2">🎬</Text>
          <Text className="text-lg font-semibold text-light-200">Your list is empty</Text>
          <Text className="text-sm text-light-300 text-center mt-1">
            Explore the search tab to add titles to your personal collections!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}