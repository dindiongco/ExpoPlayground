import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

let counter = 0;

type Task = {
  id: number;
  name: string;
  checked: boolean;
};

export default function TaskScreen() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { id: counter++, name: task.trim(), checked: false }]);
    setTask("");
  };

  const handleDeleteTask = () => {
    setTasks(tasks.filter((task) => !task.checked));
  };

  const handleToggleChecked = (id: number) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text
              style={[
                styles.taskName,
                item.checked && {
                  textDecorationLine: "line-through",
                  color: "gray",
                },
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <Checkbox
              value={item.checked}
              onValueChange={() => handleToggleChecked(item.id)}
            />
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ marginTop: 20, color: "gray" }}>No tasks yet</Text>
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        placeholderTextColor="gray"
        onChangeText={setTask}
        value={task}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDeleteTask}
          style={styles.deleteButton}
        >
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 4,
    borderRadius: 8,
    width: "90%",
    elevation: 2,
  },
  taskName: {
    fontWeight: "bold",
    fontSize: 16,
    flexShrink: 1, // prevents overflow
    marginRight: 10,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 8,
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    height: 40,
    marginTop: 20,
    borderColor: "#2196F3",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});
