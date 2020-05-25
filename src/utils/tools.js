/**
     * 工具类
     * floatAdd: 浮点数加法
     * floatSub: 浮点数减法
     * floatMul: 浮点数乘法
     * floatDiv: 浮点数除法
     */
const tools = {
    /**
     * 解决两个数相加精度丢失问题
     * @param a
     * @param b
     * @returns {Number}
     */
    floatAdd: (a, b) => {
        var c, d, e;
        if (undefined == a || null == a || "" == a || isNaN(a)) {
          a = 0;
        }
        if (undefined == b || null == b || "" == b || isNaN(b)) {
          b = 0;
        }
        try {
          c = a.toString().split(".")[1].length;
        } catch (f) {
          c = 0;
        }
        try {
          d = b.toString().split(".")[1].length;
        } catch (f) {
          d = 0;
        }
        e = Math.pow(10, Math.max(c, d));
        return (tools.floatMul(a, e) + tools.floatMul(b, e)) / e;
      },
      /**
       * 解决两个数相减精度丢失问题
       * @param a
       * @param b
       * @returns {Number}
       */
      floatSub: (a, b) => {
        var c, d, e;
        if (undefined == a || null == a || "" == a || isNaN(a)) {
          a = 0;
        }
        if (undefined == b || null == b || "" == b || isNaN(b)) {
          b = 0;
        }
        try {
          c = a.toString().split(".")[1].length;
        } catch (f) {
          c = 0;
        }
        try {
          d = b.toString().split(".")[1].length;
        } catch (f) {
          d = 0;
        }
        e = Math.pow(10, Math.max(c, d));
        return (tools.floatMul(a, e) - tools.floatMul(b, e)) / e;
      },
      /**
       * 解决两个数相乘精度丢失问题
       * @param a
       * @param b
       * @returns {Number}
       */
      floatMul: (a, b) => {
        var c = 0,
          d = a.toString(),
          e = b.toString();
        try {
          c += d.split(".")[1].length;
          //eslint-disable-next-line
        } catch (f) {}
        try {
          c += e.split(".")[1].length;
          //eslint-disable-next-line
        } catch (f) {}
        return (
          (Number(d.replace(".", "")) * Number(e.replace(".", ""))) /
          Math.pow(10, c)
        );
      },
      /**
       * 解决两个数相除精度丢失问题
       * @param a
       * @param b
       * @returns
       */
      floatDiv: (a, b) => {
        var c,
          d,
          e = 0,
          f = 0;
        try {
          e = a.toString().split(".")[1].length;
          //eslint-disable-next-line
        } catch (g) {}
        try {
          f = b.toString().split(".")[1].length;
          //eslint-disable-next-line
        } catch (g) {}
        return (
          (c = Number(a.toString().replace(".", ""))),
          (d = Number(b.toString().replace(".", ""))),
          tools.floatMul(c / d, Math.pow(10, f - e))
        );
      },

};
export default tools;