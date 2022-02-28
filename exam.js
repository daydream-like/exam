/**
 * 八股文
 * 防抖 
 */
function debounce(fn, delay) {
    let timer = null;
    return function (args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, delay);
    }
}
/**
 * 节流 在多少秒内
 */
function throttle(fn, delay) {
    let preTime = performance.now();
    return function (agrs) {
        let nowTime = performance.now();
        if (nowTime - preTime >= delay) {
            fn.call(this, ...args);
            nowTime = preTime;
        }
    }
}
/**
 * 深拷贝
 */
function deepClone(params) {
    const weakmap = new WeakMap();
    const recursion = (root) => {
        let res = null;
        if (Object.prototype.toString.call(root) === '[object Array]') {
            res = [];
            root.forEach(element => {
                res.push(recursion(element))
            });
        } else if (Object.prototype.toString.call(root) === '[object Object]') {
            if (weakmap.has(root)) {
                res = weakmap.get(root)
            } else {
                res = {};
                for (const key in root) {
                    res[key] = recursion(root[key]);
                }
            }
        } else if (Object.prototype.toString.call(root) === '[object Date]') {
            res = new Date(root)
        }
        else if (Object.prototype.toString.call(root) === '[object RegExp]') {
            res = new RegExp(root)
        } else {
            res = root;
        }
        return res;
    }
    return recursion(params);
}
/**
 * promise的执行
 */

async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('sync2')
}
console.log('script start')
setTimeout(() => {
    console.log('setTimeout')
}, 0)
async1()
new Promise(function (resolve) {
    console.log('Promise1')
    resolve()
}).then(function () {
    console.log('Promise2')
})
console.log('script end');

/**
 * promise.all
 */
function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        const res = []
        if (!arr) resolve(res)
        for (let i = 0, len = arr.length; i < len; i++) {
            Promise.prototype.then.call(arr[i], (val) => {
                res[i] = val;
                if (res.length == len) resolve(res);
            }, reject);
        }
    })
}

/**
 * promise.all
 */
function PromiseAll(arr) {
    return new Promise((resolve, reject) => {
        const res = [];
        if (!arr) {
            resolve(res)
        }
        arr.forEach((_, i) => {
            Promise.prototype.then.call(arr[i], (val) => {
                res[i] = val;
                if (res.length === arr.length) {
                    resolve(res)
                }
            }, reject)
        })
    })
}
/**
 * myinstance
 */

function myInstance(left, right) {
    left = left.__proto__;
    // left = Object.getPrototypeOf(left);
    right = right.prototype;
    while (true) {
        if (left === null) {
            return false;
        }
        if (right === left) {
            return true;
        }
        left = left.__proto__;
        // left = Object.getPrototypeOf(left);
    }
}

/**
 * 判断是否存在循环引用
 */

const hasCircle = obj => {
    let hasCircle = false;
    const map = new Map();
    var loop = obj => {
        Object.values(obj).forEach(value => {
            if (typeof value === 'object') {
                if (map.has(value)) {
                    return hasCircle = true;
                } else {
                    map.set(value);
                    loop(value)
                }
            }
        })
    }
    loop(obj);
    return hasCircle;
}
const obj = {
    a: 1,
    b: 2
}
console.log('11', hasCircle(obj)) // true