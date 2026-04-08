class Inventory:
    def __init__(self):
        self.items = {}

    def add_item(self, name, quantity, price):
        if name in self.items:
            self.items[name]["quantity"] += quantity
        else:
            self.items[name] = {"quantity": quantity, "price": price}

    def remove_item(self, name, quantity):
        if name in self.items:
            self.items[name]["quantity"] -= quantity
            if self.items[name]["quantity"] <= 0:
                del self.items[name]

    def get_total_value(self):
        total = 0
        for item in self.items:
            total += self.items[item]["quantity"] * self.items[item]["price"]
        return total

    def apply_discount(self, name, discount_percent):
        if name in self.items:
            self.items[name]["price"] *= discount_percent / 100


inv = Inventory()
inv.add_item("laptop", 5, 1000)
inv.add_item("mouse", 10, 25)
print(f"Total before discount: ${inv.get_total_value()}")

inv.apply_discount("laptop", 10)
print(f"Total after 10% discount on laptops: ${inv.get_total_value()}")
# Expected: laptops should be $900 each, total should be $4750
# Actual: ???
