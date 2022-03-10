import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import { vibrate } from "./utils";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 50,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

let intervalId = 0;

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      minWorkTime: 0,
      secWorkTime: 10,
      minBreakTime: 0,
      secBreakTime: 5,
      workTime: 10,
      breakTime: 5,
      counting: 0,
    };
  }

  countDown() {
    Keyboard.dismiss();
    if (this.state.counting === 0) {
      if (this.state.workTime !== 0) {
        intervalId = setInterval(
          () =>
            this.setState((prev) => ({
              workTime: prev.workTime - 1,
              breakTime: prev.breakTime,
              counting: 1,
            })),
          1000
        );
      } else {
        if (this.state.breakTime !== 0) {
          intervalId = setInterval(
            () =>
              this.setState((prev) => ({
                workTime: 0,
                breakTime: prev.breakTime - 1,
                counting: -1,
              })),
            1000
          );
        }
      }
    } else {
      clearInterval(intervalId);
      this.setState((prev) => ({
        workTime: prev.workTime,
        breakTime: prev.breakTime,
        counting: 0,
      }));
    }
  }

  resetHandle() {
    clearInterval(intervalId);
    this.setState({
      ...this.state,
      workTime: this.state.minWorkTime * 60 + this.state.secWorkTime,
      breakTime: this.state.minBreakTime * 60 + this.state.secBreakTime,
      counting: 0,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.workTime === 0 && nextState.counting === 1) {
      clearInterval(intervalId);
      this.setState({
        workTime: 0,
        breakTime: nextState.breakTime,
        counting: -1,
      });
      vibrate();
      if (nextState.breakTime !== 0) {
        intervalId = setInterval(
          () =>
            this.setState((prev) => ({
              workTime: 0,
              breakTime: prev.breakTime - 1,
              counting: -1,
            })),
          1000
        );
      }
    }
    if (nextState.breakTime === 0 && nextState.counting === -1) {
      clearInterval(intervalId);
      this.setState({
        workTime: 10,
        breakTime: 5,
        counting: 0,
      });
      vibrate();
    }
    return true;
  }

  handleMinWorkTimeChange = (minWorkTime) => {
    minWorkTime = minWorkTime === "" ? 0 : parseInt(minWorkTime);
    minWorkTime = minWorkTime < 0 ? 0 : minWorkTime;
    this.setState((prev) => ({
      ...prev,
      minWorkTime: minWorkTime,
      workTime: minWorkTime * 60 + prev.secWorkTime,
    }));
  };

  handleSecWorkTimeChange = (secWorkTime) => {
    secWorkTime = secWorkTime === "" ? 0 : parseInt(secWorkTime);
    secWorkTime = secWorkTime < 0 ? 0 : secWorkTime;
    this.setState((prev) => ({
      ...prev,
      secWorkTime: secWorkTime,
      workTime: prev.minWorkTime * 60 + secWorkTime,
    }));
  };

  handleMinBreakTimeChange = (minBreakTime) => {
    minBreakTime = minBreakTime === "" ? 0 : parseInt(minBreakTime);
    minBreakTime = minBreakTime < 0 ? 0 : minBreakTime;
    this.setState((prev) => ({
      ...prev,
      minBreakTime: minBreakTime,
      breakTime: minBreakTime * 60 + prev.secBreakTime,
    }));
  };

  handleSecBreakTimeChange = (secBreakTime) => {
    secBreakTime = secBreakTime === "" ? 0 : parseInt(secBreakTime);
    secBreakTime = secBreakTime < 0 ? 0 : secBreakTime;
    this.setState((prev) => ({
      ...prev,
      secBreakTime: secBreakTime,
      breakTime: prev.minBreakTime * 60 + secBreakTime,
    }));
  };

  handleDisplayText(number) {
    return number < 10 ? "0" + number : number;
  }

  render() {
    // {
    //   console.log("work time", this.state.workTime);
    //   console.log("min work time", this.state.minWorkTime);
    //   console.log("sec work time", this.state.secWorkTime);
    // }
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}>
          {this.state.counting === 1 ? "WORK TIMER" : "BREAK TIMER"}
        </Text>
        <Text style={styles.count}>
          {this.state.workTime === 0
            ? this.handleDisplayText(parseInt(this.state.breakTime / 60))
            : this.handleDisplayText(parseInt(this.state.workTime / 60))}
          :
          {this.state.workTime === 0
            ? this.handleDisplayText(this.state.breakTime % 60)
            : this.handleDisplayText(this.state.workTime % 60)}
        </Text>
        <View style={styles.flexRow}>
          <Button
            style={styles.button}
            title={this.state.counting === 0 ? "START" : "PAUSE"}
            onPress={() => this.countDown()}
          />
          <Button
            style={styles.button}
            title="RESET"
            onPress={() => this.resetHandle()}
          />
        </View>
        <View style={styles.flexRow}>
          <Text>WorkTime:</Text>
          <Text>Mins:</Text>
          <TextInput
            style={styles.input}
            value={this.state.minWorkTime.toString()}
            onChangeText={this.handleMinWorkTimeChange}
            keyboardType="numeric"
          />
          <Text>Secs:</Text>
          <TextInput
            style={styles.input}
            value={this.state.secWorkTime.toString()}
            onChangeText={this.handleSecWorkTimeChange}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.flexRow}>
          <Text>BreakTime:</Text>
          <Text>Mins:</Text>
          <TextInput
            style={styles.input}
            value={this.state.minBreakTime.toString()}
            onChangeText={this.handleMinBreakTimeChange}
            keyboardType="numeric"
          />
          <Text>Secs:</Text>
          <TextInput
            style={styles.input}
            value={this.state.secBreakTime.toString()}
            onChangeText={this.handleSecBreakTimeChange}
            keyboardType="numeric"
          />
        </View>
      </View>
    );
  }
}
