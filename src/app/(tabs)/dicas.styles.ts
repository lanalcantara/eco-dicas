import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0fdf4' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#2e7d32', textAlign: 'center' },
  tip: { fontSize: 16, marginBottom: 8, color: '#1b4332' },
  subtitle: { fontSize: 17, fontWeight: 'bold', color: '#388e3c', marginBottom: 8, marginTop: 10, textAlign: 'center' },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  input: { flex: 1, backgroundColor: '#fff', borderRadius: 8, padding: 10, borderWidth: 1, borderColor: '#c8e6c9', marginRight: 8 },
  addButton: { backgroundColor: '#388e3c', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16 },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  userAction: { fontSize: 15, color: '#2e7d32', marginBottom: 6, marginLeft: 4 },
  empty: { color: '#888', fontStyle: 'italic', textAlign: 'center', marginTop: 8 },
});

