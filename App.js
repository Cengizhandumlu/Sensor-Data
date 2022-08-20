import React from 'react';
import { SafeAreaView, Keyboard, ScrollView } from 'react-native';

import { TextInput, Button, Text } from 'react-native-paper';

import axios from "axios";

export default function App() {

	const [sensorData_01, setSensorData_01] = React.useState(0)
	const [sensorData_02, setSensorData_02] = React.useState(0)
	const [sensorData_03, setSensorData_03] = React.useState(0)
	const [sensorData_04, setSensorData_04] = React.useState(0)
	const [sensorData_05, setSensorData_05] = React.useState(0)
	const [sensorData_06, setSensorData_06] = React.useState(0)
	const [sensorData_07, setSensorData_07] = React.useState(0)

	const [requestURL, setRequestURL] = React.useState('https://5c11-78-190-229-206.eu.ngrok.io/')

	const [sensorResultMessage, setSensorResultMessage] = React.useState('There is no request yet.')


	const sendRequest = () => {
		const sensorDataURL = requestURL + sensorData_01 + '/'
			+ sensorData_02 + '/'
			+ sensorData_03 + '/'
			+ sensorData_04 + '/'
			+ sensorData_05 + '/'
			+ sensorData_06 + '/'
			+ sensorData_07

		console.log(sensorDataURL)

		axios.get(sensorDataURL).then(response => {
			console.log(response.data.result)
			setSensorResultMessage(response.data.result)
		})
	}

	return (

		<ScrollView contentContainerStyle={{ flexGrow: 1, margin: 10 }}
			keyboardDismissMode='interactive'
		>
			{sensorResultMessage === 'Attention!' ? <Text style={{ textAlign: 'center', margin: 20, fontSize: 24, color: 'red' }}>{sensorResultMessage}</Text>
				: <Text style={{ textAlign: 'center', margin: 20, fontSize: 24, color: 'green' }}>{sensorResultMessage}</Text>
			}

			<TextInput style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 5,
				marginBottom: 5
			}}
				dense='8dp'
				onChangeText={setSensorData_01}
				label='Sensor Data - 01'
				value={sensorData_01}
				keyboardType="numeric"
			/>

			<TextInput style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 5,
				marginBottom: 5
			}}
				dense='8dp'
				onChangeText={setSensorData_02}
				label='Sensor Data - 02'
				value={sensorData_02}
				keyboardType="numeric"
			/>

			<TextInput style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 5,
				marginBottom: 5
			}}
				dense='8dp'
				onChangeText={setSensorData_03}
				label='Sensor Data - 03'
				value={sensorData_03}
				keyboardType="numeric"
			/>

			<TextInput style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 5,
				marginBottom: 5
			}}
				dense='8dp'
				onChangeText={setSensorData_04}
				label='Sensor Data - 04'
				value={sensorData_04}
				keyboardType="numeric"
			/>

			<TextInput style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 5,
				marginBottom: 5
			}}
				dense='8dp'
				onChangeText={setSensorData_05}
				label='Sensor Data - 05'
				value={sensorData_05}
				keyboardType="numeric"
			/>

			<TextInput style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 5,
				marginBottom: 5
			}}
				dense='8dp'
				onChangeText={setSensorData_06}
				label='Sensor Data - 06'
				value={sensorData_06}
				keyboardType="numeric"
			/>

			<TextInput style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 5,
				marginBottom: 5
			}}
				dense='8dp'
				onChangeText={setSensorData_07}
				label='Sensor Data - 07'
				value={sensorData_07}
				keyboardType="numeric"
			/>


			<Button style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 5,
				marginBottom: 5
			}} onPress={sendRequest}>Send sensor data to service</Button>

		</ScrollView>
	);
}