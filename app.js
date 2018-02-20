import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson, deletePerson } from './actions';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class App extends Component {
  state = {
    nameValue: '',
    jobValue: ''
  }
  addPerson = () => {
    if (this.state.nameValue === '') return;
    if (this.state.jobValue === '') return;
    this.props.dispatchAddPerson({
      name: this.state.nameValue,
      job: this.state.jobValue
    });
    this.setState({ nameValue: '', jobValue: '' });
  }
  deletePerson = (person) => {
    this.props.dispatchdeletePerson(person)
  }
  updateInputName = (nameValue) => {
    this.setState({ nameValue })
  }
  updateInputJob = (jobValue) => {
    this.setState({ jobValue })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>People</Text>
        <TextInput
          onChangeText={text => this.updateInputName(text)}
          style={styles.input}
          value={this.state.nameValue}
          placeholder="Name"
        />
        <TextInput
          onChangeText={text => this.updateInputJob(text)}
          style={styles.input}
          value={this.state.jobValue}
          placeholder="Job"
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={this.addPerson}
        >
          <Text style={styles.buttonText}>Add Person</Text>
        </TouchableHighlight>
        {
          Object.keys(this.props.people).map((key, index) => (
            <View key={index} style={styles.person}>
              <Text>{this.props.people[key].name} - {this.props.people[key].job + "(" + this.props.people[key].synced + ")"}</Text>
              <Text onPress={() => this.deletePerson(this.props.people[key])}>Delete Person</Text>
            </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#ff9900',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  },
  person: {
    marginTop: 12,
  },
});

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddPerson: (person) => dispatch(addPerson(person)),
    dispatchdeletePerson: (person) => dispatch(deletePerson(person))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
