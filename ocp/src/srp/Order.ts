class Order {
    private total: number;
  
    constructor(total: number) {
      this.total = total;
    }
  
    calculateTotal(): number {
      return this.total;
    }
  }