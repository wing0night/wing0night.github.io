# least squares method最小二乘法
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import leastsq

def fn(p, x):
    a1, a2 = p
    return a1 * x + a2
def error(p, y, x):
    return fn(p, x) - y

def main():
    x = np.array([8.19, 2.72, 6.39, 8.71, 4.7, 2.66, 3.78])
    y = np.array([7.01, 2.78, 6.47, 6.71, 4.1, 4.23, 4.05])
    p0 = [1, 20]
    Para = leastsq(error, p0, args=(y, x))
    a1, a2 = Para[0]
    print('a1 =', a1, 'a2 =', a2)
    plt.figure(figsize=(8, 6))
    plt.scatter(x, y, color='red', label='Sample Point', linewidth=3)
    x = np.linspace(0, 10, 1000)
    y = a1 * x + a2
    plt.plot(x, y, color='orange', label='Fitting Line', linewidth=2)
    plt.legend()
    plt.show()

if __name__ == '__main__':
    main()




