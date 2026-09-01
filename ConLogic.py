
Blist = []

for i in range(256):
    b = print(format(i, 'b'))
    Blist.append(b)


deci=[]
for i in range(32,255):
    deci.append(i)


binary = (input("binary:")) 

unit =binary.split()

for b in unit:
    decimal = int(b, 2)
    character = chr(decimal)
    print(character, end="")
