import React from 'react';
import { regOvComponent } from '@weapp/utils';

window.ebuilderSDK.getPageSDK().on('formReady', (args) => {
  // console.log(args)
  // 获取表单实例
  const weFormSdk = WeFormSDK.getWeFormInstance();
  // 获取总明细表
  const uf_sales = weFormSdk.convertFieldNameToId('mxb3cpmx_78486176353');
  const wlmc = weFormSdk.convertFieldNameToId('wlmc', uf_sales);
  const cplx = weFormSdk.convertFieldNameToId('cplx', uf_sales);
  console.log('-----------------' + wlmc);
  // 获取软件明细表
  const uf_sales_c_1 = weFormSdk.convertFieldNameToId('uf_sales_c_1');
  // 获取明细表内字段fieldId
  const rjcpmc = weFormSdk.convertFieldNameToId('rjcpmc');
  // 获取硬件明细表fieldId
  const uf_sales_c_2 = weFormSdk.convertFieldNameToId('uf_sales_c_2');
  // 获取明细表内字段fieldId
  const cpmc = weFormSdk.convertFieldNameToId('cpmc');
  // 获取服务明细表fieldId
  const uf_sales_c_3 = weFormSdk.convertFieldNameToId('uf_sales_c_3');
  // 获取明细表内字段fieldId
  const xm = weFormSdk.convertFieldNameToId('xm');
  weFormSdk.bindDetailFieldChangeEvent(`${wlmc}`, (data) => {
    debugger;
    setTimeout(function () {}, 2000);
    const cplx = weFormSdk.getFieldValue(`${cplx}_${data.rowId}`);

    if (cplx == 2) {
      weFormSdk.addDetailRow(uf_sales_c_1, { [rjcpmc]: { value: data.value } });
    } else if (cplx == 3) {
      weFormSdk.addDetailRow(uf_sales_c_2, { [cpmc]: { value: data.value } });
    } else if (cplx == 4) {
      weFormSdk.addDetailRow(uf_sales_c_3, { [xm]: { value: data.value } });
    }
  });

  //  刘俊加 付款方式 打勾✓的套用效果
  // 获取主表字段支付方式
  const selectFieldMark = weFormSdk.convertFieldNameToId('zffs2');

  weFormSdk.changeFieldValue(weFormSdk.convertFieldNameToId('gxfkfsyc'), {
    value: '✓',
  });

  // 绑定事件，对主表字段和明细表的某一行绑定
  weFormSdk.bindFieldChangeEvent(`${selectFieldMark}`, ({ value }) => {
    weFormSdk.changeFieldValue(weFormSdk.convertFieldNameToId('gxfkfsyc'), {
      value: '',
    });
    weFormSdk.changeFieldValue(weFormSdk.convertFieldNameToId('gxfkfsfq'), {
      value: '',
    });

    if (value == '1') {
      // 分期付款
      weFormSdk.changeFieldValue(weFormSdk.convertFieldNameToId('gxfkfsfq'), {
        value: '✓',
      });
    } else if (value == '0') {
      // 一次性付款
      weFormSdk.changeFieldValue(weFormSdk.convertFieldNameToId('gxfkfsyc'), {
        value: '✓',
      });
    }
  });
});

/** 自研编辑器模板文件存储字段 */
const EditorFileStorageField = 'mbwj';

regOvComponent('weappEbdcoms', 'Editor', (Com) => {
  return React.forwardRef((props, ref) => {
    try {
      if (props?.config?.editorIdList && EditorFileStorageField) {
        const formSDK = WeFormSDK.getWeFormInstance();
        const fileIds = formSDK.getFieldValue(
          formSDK.convertFieldNameToId(EditorFileStorageField)
        );

        if (fileIds) {
          props.templateList = props?.config?.editorIdList.filter((item) =>
            fileIds.includes(item.tplFileId)
          );
        }
      }
    } catch (err) {
      console.log(err);
    }

    return <Com {...props} ref={ref} />;
  });
});
