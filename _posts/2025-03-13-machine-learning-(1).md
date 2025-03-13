## Machine learning(1)

记录一些小破站机器学习课程笔记

【【机器学习】【白板推导系列】【合集 1～33】】 https://www.bilibili.com/video/BV1aE411o7qd/?share_source=copy_web&vd_source=177d9d66af4f939bd66d809cf884ebbf

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





### 正则化-岭回归



<script src="https://utteranc.es/client.js"
        repo="wing0night/wing0night.github.io"
        issue-term="pathname"
        label="comments"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>

