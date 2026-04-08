def calc(a, b, op):
    if op == "add":
        return a + b
    elif op == "sub":
        return a - b
    elif op == "mul":
        return a * b
    elif op == "div":
        if b == 0:
            return "error"
        return a / b
    elif op == "pow":
        return a ** b
    else:
        return "unknown"

def process_batch(data):
    results = []
    for item in data:
        r = calc(item[0], item[1], item[2])
        results.append(r)
    return results
