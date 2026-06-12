export interface ServiceItem {
  id: string;
  iconName: 'Sparkles' | 'Trash2' | 'ArrowUp' | 'Type' | 'Armchair' | 'Grid3X3';
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  images: string[];
}
