for i in range(256):
    binary = format(i, '08b')
    character = chr(i)
    print(binary, "=", character)
