export interface UserSia {
  code: number,
  userCreator: number,
  name: string,
  note: string,
  inactive: false,
  excluded: false,
  dateCreation: Date,
  userGroup: number,
  sector: number,
  theme: number,
  immediateSuperior: number,
  userType: number,
  financialApproval: number,
  cgiRegistration: number,
  cgiCompany: number,
  idAgrosys: number,
  idSenior: number,
  idTn3: number,
  idCgi: number,
  idEngeman: number,
  agrosysCompany: number,
  agrosysUnit: number,
  login: string,
  password: string,
  email: string,
  loginAgrosys: string,
  loginSenior: string,
  loginTn3: string,
  loginCgi: string,
  loginEngeman: string,
  loginInternet: string,
  accessKeepSystemParameters: boolean,
  accessGenerateBackup: boolean,
  accessVersionHistory: boolean,
  accessKeepCompany: boolean,
  accessKeepUnit: boolean,
  accessKeepFunction: boolean,
  accessKeepSector: boolean,
  accessKeepUserGroup: boolean,
  accessKeepUser: boolean,
  accessKeepCostCenter: boolean,
  accessKeepEquipmentType: boolean,
  accessKeepEquipment: boolean,
  accessKeepOdometerHourmeter: boolean,
  accessKeepMechanical: boolean,
  accessKeepTask: boolean,
  accessKeepTaskType: boolean,
  accessRequestMaintenance: boolean,
  accessAssumeMaintenance: boolean,
  accessDestinateMaintenance: boolean,
  accessMaintenanceProgress: boolean,
  accessGeneralRequestMaintenance: boolean,
  accessSheduleMaintenance: boolean,
  accessIndicatorServiceRequest: boolean,
  accessIndicatorServiceOrderTimeLimit: boolean,
  accessIndicatorMaintenanceStatus: boolean,
  accessAuditSystem: boolean,
  accessManageLoginedUser: boolean,
  accessReportEquipment: boolean,
  accessReportCostCenter: boolean,
  accessReportEquipmentType: boolean,
  accessReportMechanical: boolean,
  accessReportTask: boolean,
  accessReportTaskType: boolean,
  accessReportUserGroup: boolean,
  accessReportUser: boolean,
  accessReportOdometerHourmeter: boolean,
  accessReportRequestService: boolean,
  accessReportOrderService: boolean,
  accessKeepEquipmentPart: boolean,
  accessKeepClient: boolean,
  accessKeepSac: boolean,
  accessReportClient: boolean,
  accessReportSac: boolean,
  accessKeepInformativeMessage: boolean,
  accessKeepRepresentative: boolean,
  accessKeepProduct: boolean,
  accessKeepClientType: boolean,
  accessKeepCareChannel: boolean,
  accessKeepReasonForComplaint: boolean,
  accessKeepExpenseRecipe: boolean,
  accessKeepMaintenancePriority: boolean,
  accessKeepReasonForMaintenance: boolean,
  accessKeepRoutineMaintenance: boolean,
  accessKeepProductLot: boolean,
  accessKeepStatusRequest: boolean,
  accessKeepRequestType: boolean,
  accessKeepRequest: boolean,
  accessKeepShippingCompany: boolean,
  accessKeepCrossCd: boolean,
  accessKeepPrinter: boolean,
  accessKeepPrinterCounter: boolean,
  accessKeepPriceTablePrinting: boolean,
  accessKeepPrinterExpenses: boolean,
  accessReportPrinterCounter: boolean,
  accessKeepSystemUpdate: boolean,
  accessKeepDriver: boolean,
  accessKeepTool: boolean,
  accessRequestToolLoan: boolean,
  accessManageToolLoan: boolean,
  accessKeepComputerEquipment: boolean,
  accessKeepRequestLoanComputerEquipment: boolean,
  accessAdministerLoanComputerEquipment: boolean,
  requirePasswordChange: false,
  accessIndicatorItemSacTermServiceMinute: boolean,
  accessIndicatorItemSacTermTerminationMinute: boolean,
  accessIndicatorSacTerminalization: boolean,
  accessRequestCustomerInactivation: boolean,
  accessRequestCustomerUpdate: boolean,
  accessScheduleCustomerVisit: boolean,
  accessKeepPrinterRentals: boolean,
  accessIndicatorPrinterCounter: boolean,
  accessIndicatorItemSacTermServiceDay: boolean,
  accessIndicatorItemSacDeadlineDay: boolean,
  accessKeepReasonForCustomerVisit: boolean,
  accessReportSacQuantityProductClaimed: boolean,
  accessReportValidatedAfterSale: boolean,
  accessRequestRefund: boolean,
  accessRequestAdvance: boolean,
  accessKeepRefund: boolean,
  accessKeepAdvance: boolean,
  accessKeepFinancialApprover: boolean,
  accessReportAfterSaleCustomer: boolean,
  accessKeepClientInactivationReason: boolean,
  accessReportCustomerInactivation: boolean,
  accessIndicatorOrderServiceTermMaintenance: boolean,
  accessKeepVehicle: boolean,
  accessRequestVehicleLoan: boolean,
  accessManageVehicleLoan: boolean,
  accessKeepVehicleLoanRoutine: boolean,
  accessReportVehicleLoan: boolean,
  accessIndicatorValuePrinterCounter: boolean,
  accessKeepBank: boolean,
  accessKeepSpent: boolean,
  accessRequestNewProduct: boolean,
  accessKeepRequestNewProductMarketing: boolean,
  accessKeepRequestNewProductIndustrial: boolean,
  accessKeepRequestNewProductQuotation: boolean,
  accessKeepRequestNewProductController: boolean,
  accessKeepRequestNewProductApproval: boolean,
  accessKeepRequestNewProductPed: boolean,
  accessKeepSupplyOrder: boolean,
  accessKeepEquipmentForLoan: boolean,
  accessKeepEquipmentLoanContract: boolean,
  accessReportSupply: boolean,
  accessReportLoanTool: boolean,
  accessKeepAreaCalled: boolean,
  accessOpenCalled: boolean,
  accessChangeCalledProblem: boolean,
  accessChangeCalledSector: boolean,
  accessKeepInternalAgenda: boolean,
  accessKeepBanner: boolean,
  accessReportResultsCalled: boolean,
  accessReportCalledByProblem: boolean,
  updatePermissionDesktop: false,
  updatePermissionWeb: boolean,
  updateBannerDesktop: false,
  updateBannerWeb: boolean,
  accessReportRequestNewProductInProgress: boolean,
  accessKeepBrandParkEquipment: boolean,
  accessKeepModelParkEquipment: boolean,
  accessKeepParkEquipment: boolean,
  accessRequestEndomarketingRequest: boolean,
  accessAnswerEndomarketingRequest: boolean,
  accessKeepContractLoanTools: boolean,
  accessKeepMechanicalHourlyCost: boolean,
  accessKeepMaintenancePlan: boolean,
  accessKeepPeriodicityMaintenancePlan: boolean,
  accessGenerateOsMaintenancePlan: boolean,
  accessLgpdRefund: boolean,
  accessLgpdAdvance: boolean,
  accessLgpdRefundManagementSector: boolean,
  accessLgpdAdvanceManagementSector: boolean,
  accessGenerateTitleAdvanceAgrosys: boolean,
  accessGenerateTitleRefundAgrosys: boolean,
  accessKeepUserWs: boolean,
  accessKeepPositionLevel: boolean,
  accessReportInternalAgenda: boolean,
  accessDischargeMPDischargeOpened: boolean,
  accessDischargeMPReleasedForAnalysis: boolean,
  accessDischargeMPUnderAnalysis: boolean,
  accessDischargeMPAnalysisCompleted: boolean,
  accessDischargeMPReleasedForDischarge: boolean,
  accessDischargeMPUnderDischarge: boolean,
  accessDischargeMPDischargeCompleted: boolean,
  accessDischargeMPCompleteProcess: boolean,
  accessDischargeMPInterruptProcess: boolean,
  accessKeepBrandTruck: boolean,
  accessKeepModelTruck: boolean,
  accessKeepTruck: boolean,
  accessKeepCharge: boolean,
  accessKeepCat: boolean,
  accessRetrieveSac: boolean,
  accessKeepTypeTruck: boolean,
  accessKeepRoom: boolean,
  accessRequestScheduleRoom: boolean,
  accessAdministerScheduleRoom: boolean,
  accessReportScheduleRoom: boolean,
  lastAccess: Date,
  dateLastUpdatePassword: Date,
  photo: string,
  accessIndicatorItemSacTermTerminationDay: boolean
}
