import { Text, type TextProps, StyleSheet } from 'react-native'

type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'link'
}

export function ThemedText({ type = 'default', style, ...rest }: ThemedTextProps) {
  return <Text style={[styles.base, type === 'title' && styles.title, type === 'link' && styles.link, style]} {...rest} />
}

const styles = StyleSheet.create({
  base: {
    color: '#11181C',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  link: {
    color: '#0a7ea4',
    fontWeight: '600',
  },
})
