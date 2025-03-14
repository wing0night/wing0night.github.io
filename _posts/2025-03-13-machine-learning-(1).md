## Machine learning(1)

记录一些小破站机器学习课程笔记

**[【【机器学习】【白板推导系列】【合集 1～33】】]( https://www.bilibili.com/video/BV1aE411o7qd/?share_source=copy_web&vd_source=177d9d66af4f939bd66d809cf884ebbf)**

高斯分布-最小二乘法-正则化

### 高斯分布

线性高斯模型Linear Gaussian Model

LGM的一个例子：卡尔曼滤波器Kalman filter$z_{t-1} -> z_t: z_t = Az_{t-1} + B + \epsilon$

极大似然估计（MLE）的推导

- Env

$$
Data : X = (x_1, x_2, ..., x_n)^T = \begin{pmatrix} x_1\\x_2\\...\\x_N \end{pmatrix}_{N*P}
$$
每个$x_n$是P维
$$
x_i \in R^P
$$
$$
x_i \sim N(\mu, \sigma^2)
$$
满足高斯分布且为独立同分布（iid）

将参数$\mu$, $\sigma^2$设为$\theta$，即$\theta = (\mu, \sigma^2)$

- MLE推导

$$
MLE = \theta_{MLE} = argmax_{\theta}(P(X | \theta))
$$
$P(X | \theta)$：概率乘积$\prod$。

对$P(X | \theta)$取log（ln）
$$
logP(X|\theta) = log\prod_{i=1}^{N}P(x_i|\theta) = \sum_{i=1}^Nlog[P(x_i|\theta)]=\sum_{i=1}^Nlog[\frac{1}{\sqrt{2\pi}\sigma}exp(-\frac{(x_i-\mu)^2}{2\sigma^2})]
$$

通过对此式分别求导，求得$argmax_\mu$和$argmax_{\sigma^2}$

$$
\mu_{MLE} = argmax_{\mu} = \frac{1}{N}\sum_{i=1}^Nx_i（无偏估计）
$$
$$
\sigma^2_{MLE} = argmax_{\sigma^2} = \frac{1}{N} = \sum_{i=1}^{N}(x_i - \mu)^2（有偏估计）
$$

### 最小二乘法

#### 计算参数w

![alt text](https://raw.githubusercontent.com/wing0night/wing0night.github.io/refs/heads/main/_posts/images/image.png)
<center>matplotlib绘制的最小二乘法示意图</center>

$$
Data = {(x_1, y_1), ..., (x_n, y_n)}, x_i\in R^P, y_i\in R^1
$$

$x_i$和$y_i$分别属于P维空间和1维空间

$$
X = \begin{pmatrix}x_{11}&x_{12}&...&x_{1p} \\ x_{21}&x_{22}&...&x_{2p} \\ x_{N1}&x_{N2}&...&x_{Np} \end{pmatrix}_{N*P}
$$

$$
Y = \begin{pmatrix}y_1 \\ y_2 \\ ... \\y_N \end{pmatrix}_{N*1}
$$

损失函数

$$
L(w) = \sum^N_{i=1}||w^Tx_i - y_i||^2 = (w^TX^T - Y^T)(XW - Y) = w^TX^TXw - 2w^TX^TY + Y^TY
$$

$$
\hat{w} = argmin_wL(w)
$$

-> 求导 ->

$$
\frac{\delta L(w)}{\delta w} = 0 -> 2X^TXw - 2X^TY = 0 -> \hat{w} = (X^TX)^{-1}X^TY（(X^TX)^{-1}X^T：伪逆X^+）
$$

求得$\hat{w}$

#### 几何理解

对于$f(x) = w^Tx = x^T\beta$（左乘：行变换。右乘：列变换。转置之后原先的行变换即变成列变换）

对于每一个$X_i \in R^p$，只要使得拟合的$y_i$离样本$y_i$的距离最小 $\rightarrow$ 向量相乘 $\bot$ 原先的样本$X_i$

$$
\overrightarrow{x_i} \bot (\overrightarrow{y_i} - \overrightarrow{x_i}\beta)
$$

$$
\rightarrow \overrightarrow{X}(\overrightarrow{Y} - \overrightarrow{X}\overrightarrow{\beta}) = 0
$$

$$
代入\overrightarrow{a} · \overrightarrow{b} = a^Tb
$$

$$
X^T(Y-X\beta) = 0 \rightarrow \beta = (X^TX)^{-1}X^TY
$$

得到拟合后函数的参数

#### 概率理解

概率角度理解最小二乘估计

如果数据含有噪声$\epsilon$，$\epsilon \in N(0, \sigma^2)$

Data可以被表示为$y = f(w) + \epsilon = w^Tx + \epsilon$。于是Data服从$N(w^Tx, \sigma^2)$

MLE$\rightarrow$ $\hat{w} =argmax_wlogP(Y\|X; w) = argmin_w(y_i - w^Tx_i)^2$

$\star$ 最小二乘估计等价于noise为高斯噪声时的极大似然估计（MLE）

### 正则化-岭回归

线性回归正则化的一个经典方法：岭回归

$$
Loss \quad Function: L(w) = \sum_{i=1}^N||w^Tx_i - y_i||^2\rightarrow\hat{w} = (X^TX)^{-1}X^TY
$$

$$
X_{N*p}：N个样品，X\in R^p
$$

当$N >> p$时，$X^TX$可逆

当p很大，或者样品数很少时，$X^TX$不可逆，容易过拟合

$$
过拟合\rightarrow\begin{cases}加数据 \\ 特征提取（减小p） \\ 正则化 \\ \end{cases}
$$

正则化框架

$$
argmin_w{(L(w) + \lambda P(w))}。
$$

$$
L(w)： Loss function
$$

$$
P(w)：惩罚项
$$

岭回归正则化方法

$$
J(w) = \sum_{i=1}^N||w^Tx_i-y_i||^2 + \lambda w^Tw
$$

$$
\hat{w} = argmin_wJ(w)
$$

$$
\rightarrow \hat{w} = (X^TX + \lambda I)^{-1}X^TY
$$


## Ref

**[【【机器学习】【白板推导系列】【合集 1～33】】]( https://www.bilibili.com/video/BV1aE411o7qd/?share_source=copy_web&vd_source=177d9d66af4f939bd66d809cf884ebbf)**

**[比较全的markdown数学符号集合](https://www.cnblogs.com/ywsun/p/14271547.html)**

<script src="https://utteranc.es/client.js"
        repo="wing0night/wing0night.github.io"
        issue-term="pathname"
        label="comments"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>

