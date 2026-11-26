import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useCounterStore } from './src/store/useCounterStore';

export default function App() {
  const count = useCounterStore((s) => s.count);
  const increment = useCounterStore((s) => s.increment);
  const decrement = useCounterStore((s) => s.decrement);
  const reset = useCounterStore((s) => s.reset);

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>KoinApp</Text>
        <Text style={styles.subtitle}>Expo SDK 52 · TypeScript · Zustand · Moti</Text>

        <MotiView
          from={{ scale: 0.9, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring' }}
          key={count}
          style={styles.counterBadge}
        >
          <Text style={styles.counterText}>{count}</Text>
        </MotiView>

        <View style={styles.row}>
          <ActionButton label="−" onPress={decrement} />
          <ActionButton label="Reset" onPress={reset} variant="secondary" />
          <ActionButton label="+" onPress={increment} />
        </View>

        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

function ActionButton({ label, onPress, variant = 'primary' }: ActionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        variant === 'secondary' && styles.buttonSecondary,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.buttonLabel, variant === 'secondary' && styles.buttonLabelSecondary]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  counterBadge: {
    minWidth: 96,
    paddingVertical: 20,
    paddingHorizontal: 28,
    borderRadius: 20,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    minWidth: 72,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#1e293b',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#e2e8f0',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  buttonLabelSecondary: {
    color: '#334155',
    fontSize: 15,
  },
});