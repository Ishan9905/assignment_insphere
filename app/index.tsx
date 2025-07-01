import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const navigateTo = (route: '/login' | '/add-user' | '/show-user') => {
    router.push(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Insphere Solutions</Text>
        <Text style={styles.subtitle}>User Management System</Text>
      </View>
      
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigateTo('/login')}
        >
          <Ionicons name="log-in-outline" size={32} color="#007AFF" />
          <Text style={styles.cardTitle}>Login</Text>
          <Text style={styles.cardDescription}>Access your account</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigateTo('/add-user')}
        >
          <Ionicons name="person-add-outline" size={32} color="#34C759" />
          <Text style={styles.cardTitle}>Add User</Text>
          <Text style={styles.cardDescription}>Create new user account</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigateTo('/show-user')}
        >
          <Ionicons name="people-outline" size={32} color="#FF9500" />
          <Text style={styles.cardTitle}>Show Users</Text>
          <Text style={styles.cardDescription}>View all registered users</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginTop: 12,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
  },
});
