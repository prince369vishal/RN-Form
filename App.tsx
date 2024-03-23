import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = val => {
    setName(val);
  };

  const handleAgeChange = val => {
    setAge(val);
  };

  const handlePasswordChange = val => {
    setPassword(val);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submitted:', {name, age, password});
  };

  const handleDelete = () => {
    // Handle delete action here
    setName('');
    setAge('');
    setPassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.header}>Enter your details</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          onChangeText={handleNameChange}
          value={name}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your age"
          onChangeText={handleAgeChange}
          value={age}
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <View
          style={[
            styles.button,
            {backgroundColor: Platform.OS === 'ios' ? '#4CAF50' : '#4CAF50'},
          ]}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleDelete}>
        <View
          style={[
            styles.button,
            {backgroundColor:  Platform.OS === 'ios' ? '#f44336' : '#f44336'},
          ]}>
          <Text style={styles.buttonText}>Delete</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20, // Add horizontal padding to ensure spacing from screen edges
  },
  header: {
    fontSize: 30,
    marginVertical: 20,
  },
  textInput: {
    fontSize: 20,
    color: 'blue',
    borderWidth: 2,
    borderColor: '#333',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
    height: 50, // Set the height to 50 pixels
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
