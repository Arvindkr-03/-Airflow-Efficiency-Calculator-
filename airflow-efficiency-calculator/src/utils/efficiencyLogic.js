
export function oppositeOf(dir) {
    const map = { north: 'south', south: 'north', east: 'west', west: 'east' };
    return map[dir];
  }
  
  export function calculateEfficiency({ window1, window2, wind, speed }) {
    if (window1 === 'none' || window2 === 'none') return 'Poor';
  
    if (window1 === oppositeOf(window2)) {
      if (wind === window1 || wind === window2) {
        return speed > 30 ? 'Excellent' : 'Good';
      }
      return 'Moderate';
    }
  
    if (window1 === wind || window2 === wind) return 'Moderate';
  
    return 'Poor';
  }
  