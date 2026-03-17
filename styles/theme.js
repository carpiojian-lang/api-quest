export const theme = {
  // Colors
  primary: '#FF6B35',      // Orange
  primaryDark: '#E55A2B',
  accent: '#F7931E',        // Gold
  background: '#FFF8F0',   // Cream
  surface: '#FFFFFF',      // White cards
  textPrimary: '#2D1B69',  // Dark purple
  textSecondary: '#6B7280', // Gray
  error: '#EF4444',
  success: '#10B981',
  
  // Shadows (iOS/Android)
  shadow: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 12,
    },
  },
  
  // Spacing
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  
  // Border radius
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  
  // Typography scales (using system fonts)
  typography: {
    h1: { fontSize: 32, fontWeight: '800' },
    h2: { fontSize: 24, fontWeight: '700' },
    h3: { fontSize: 20, fontWeight: '600' },
    body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
    caption: { fontSize: 14, fontWeight: '500' },
  },
  
  // Gradients (will use with expo-linear-gradient)
  gradient: {
    primary: ['#FF6B35', '#F7931E'],
    purple: ['#2D1B69', '#4A3FA0'],
  },
};
