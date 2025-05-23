/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleCpp.js
 */

#include "RNDateTimePickerCGenJSI.h"

namespace facebook::react {

static jsi::Value __hostFunction_NativeModuleDatePickerCxxSpecJSI_dismiss(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeModuleDatePickerCxxSpecJSI *>(&turboModule)->dismiss(
    rt
  );
}
static jsi::Value __hostFunction_NativeModuleDatePickerCxxSpecJSI_open(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeModuleDatePickerCxxSpecJSI *>(&turboModule)->open(
    rt,
    args[0].asObject(rt)
  );
}

NativeModuleDatePickerCxxSpecJSI::NativeModuleDatePickerCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker)
  : TurboModule("RNCDatePicker", jsInvoker) {
  methodMap_["dismiss"] = MethodMetadata {0, __hostFunction_NativeModuleDatePickerCxxSpecJSI_dismiss};
  methodMap_["open"] = MethodMetadata {1, __hostFunction_NativeModuleDatePickerCxxSpecJSI_open};
}
static jsi::Value __hostFunction_NativeModuleMaterialDatePickerCxxSpecJSI_dismiss(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeModuleMaterialDatePickerCxxSpecJSI *>(&turboModule)->dismiss(
    rt
  );
}
static jsi::Value __hostFunction_NativeModuleMaterialDatePickerCxxSpecJSI_open(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeModuleMaterialDatePickerCxxSpecJSI *>(&turboModule)->open(
    rt,
    args[0].asObject(rt)
  );
}

NativeModuleMaterialDatePickerCxxSpecJSI::NativeModuleMaterialDatePickerCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker)
  : TurboModule("RNCMaterialDatePicker", jsInvoker) {
  methodMap_["dismiss"] = MethodMetadata {0, __hostFunction_NativeModuleMaterialDatePickerCxxSpecJSI_dismiss};
  methodMap_["open"] = MethodMetadata {1, __hostFunction_NativeModuleMaterialDatePickerCxxSpecJSI_open};
}
static jsi::Value __hostFunction_NativeModuleMaterialTimePickerCxxSpecJSI_dismiss(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeModuleMaterialTimePickerCxxSpecJSI *>(&turboModule)->dismiss(
    rt
  );
}
static jsi::Value __hostFunction_NativeModuleMaterialTimePickerCxxSpecJSI_open(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeModuleMaterialTimePickerCxxSpecJSI *>(&turboModule)->open(
    rt,
    args[0].asObject(rt)
  );
}

NativeModuleMaterialTimePickerCxxSpecJSI::NativeModuleMaterialTimePickerCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker)
  : TurboModule("RNCMaterialTimePicker", jsInvoker) {
  methodMap_["dismiss"] = MethodMetadata {0, __hostFunction_NativeModuleMaterialTimePickerCxxSpecJSI_dismiss};
  methodMap_["open"] = MethodMetadata {1, __hostFunction_NativeModuleMaterialTimePickerCxxSpecJSI_open};
}
static jsi::Value __hostFunction_NativeModuleTimePickerCxxSpecJSI_dismiss(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeModuleTimePickerCxxSpecJSI *>(&turboModule)->dismiss(
    rt
  );
}
static jsi::Value __hostFunction_NativeModuleTimePickerCxxSpecJSI_open(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeModuleTimePickerCxxSpecJSI *>(&turboModule)->open(
    rt,
    args[0].asObject(rt)
  );
}

NativeModuleTimePickerCxxSpecJSI::NativeModuleTimePickerCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker)
  : TurboModule("RNCTimePicker", jsInvoker) {
  methodMap_["dismiss"] = MethodMetadata {0, __hostFunction_NativeModuleTimePickerCxxSpecJSI_dismiss};
  methodMap_["open"] = MethodMetadata {1, __hostFunction_NativeModuleTimePickerCxxSpecJSI_open};
}


} // namespace facebook::react
