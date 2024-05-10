# name=input("enter")
# i=0
# while i<len(name):
#     print(name.upper()[i]+name.lower()[i]*(i),end="")
#     if  i!=len(name)-1:
#         print("_",end="")
#     i=i+1
n=[10,11,12,13,14,17,18,19]
a=30
i=0
b=[]
while i<len(n):
    j=1
    while j<len(n):
        if n[i]+n[j]==a:
            b.append([n[i],n[j]])
        if j==3:
            break    
        j=j+1
    i=i+1
print(b)        
  