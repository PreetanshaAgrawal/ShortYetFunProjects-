# library needed: matplotlib

import matplotlib.pyplot as plt

# barCharts 
left = [1,2,3,4,5]
right = [10, 11, 23,36, 4]

tick_label = ["one", "two", "three", "four", "five"]

plt.bar(left, right, tick_label=tick_label, width=0.8, color=["blue", "orange"])


# Graph plot 
# x1 = [2,4,5]
# y1 = [2,3,6]

# plt.plot(x1,y1, color="green", linestyle="dashed", linewidth=3, marker ='o', markerfacecolor= "blue", markersize = 12 ,label="Line 1")

# plt.ylim(1, 8)
# plt.xlim(1,8)

# x2 = [1,2,3]
# y2 = [2,4,6]

# plt.plot(x2,y2, label="Line 2")

plt.xlabel("X Axis")
plt.ylabel("Y Axis")

plt.title("Demo Graph bar chart")
# plt.title("Demo Graph Plotting - Customization")
# plt.title("Demo Graph Plotting - Two Lines")
# plt.legend()

plt.show()
