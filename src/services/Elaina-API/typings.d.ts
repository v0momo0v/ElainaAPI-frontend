declare namespace API {
  type BaseResponseboolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseInterfaceInfo = {
    code?: number;
    data?: InterfaceInfo;
    message?: string;
  };

  type BaseResponseListInterfaceInfo = {
    code?: number;
    data?: InterfaceInfo[];
    message?: string;
  };

  type BaseResponseListUserInterfaceInfo = {
    code?: number;
    data?: UserInterfaceInfo[];
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponselong = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseobject = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageInterfaceInfo = {
    code?: number;
    data?: PageInterfaceInfo;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponsePageUserInterfaceInfo = {
    code?: number;
    data?: PageUserInterfaceInfo;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserInterfaceInfo = {
    code?: number;
    data?: UserInterfaceInfo;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: string;
  };

  type getInterfaceInfoByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type getUserInterfaceInfoByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type IdRequest = {
    id?: string;
  };

  type InterfaceInfo = {
    createTime?: string;
    description?: string;
    id?: string;
    isDeleted?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userId?: string;
  };

  type InterfaceInfoAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    url?: string;
  };

  type InterfaceInfoInvokeRequest = {
    id?: string;
    userRequestParams?: string;
  };

  type InterfaceInfoUpdateRequest = {
    description?: string;
    id?: string;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    url?: string;
  };

  type listInterfaceInfoByPageUsingGETParams = {
    current?: string;
    description?: string;
    id?: string;
    method?: string;
    name?: string;
    pageSize?: string;
    requestHeader?: string;
    responseHeader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: string;
  };

  type listInterfaceInfoUsingGETParams = {
    current?: string;
    description?: string;
    id?: string;
    method?: string;
    name?: string;
    pageSize?: string;
    requestHeader?: string;
    responseHeader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: string;
  };

  type listUserInterfaceInfoByPageUsingGETParams = {
    current?: string;
    id?: string;
    interfaceInfoId?: string;
    leftNum?: number;
    pageSize?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: string;
  };

  type listUserInterfaceInfoUsingGETParams = {
    current?: string;
    id?: string;
    interfaceInfoId?: string;
    leftNum?: number;
    pageSize?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: string;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: string;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | 'ACCEPTED'
      | 'ALREADY_REPORTED'
      | 'BAD_GATEWAY'
      | 'BAD_REQUEST'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'CHECKPOINT'
      | 'CONFLICT'
      | 'CONTINUE'
      | 'CREATED'
      | 'DESTINATION_LOCKED'
      | 'EXPECTATION_FAILED'
      | 'FAILED_DEPENDENCY'
      | 'FORBIDDEN'
      | 'FOUND'
      | 'GATEWAY_TIMEOUT'
      | 'GONE'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'IM_USED'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'INSUFFICIENT_STORAGE'
      | 'INTERNAL_SERVER_ERROR'
      | 'I_AM_A_TEAPOT'
      | 'LENGTH_REQUIRED'
      | 'LOCKED'
      | 'LOOP_DETECTED'
      | 'METHOD_FAILURE'
      | 'METHOD_NOT_ALLOWED'
      | 'MOVED_PERMANENTLY'
      | 'MOVED_TEMPORARILY'
      | 'MULTIPLE_CHOICES'
      | 'MULTI_STATUS'
      | 'NETWORK_AUTHENTICATION_REQUIRED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NOT_ACCEPTABLE'
      | 'NOT_EXTENDED'
      | 'NOT_FOUND'
      | 'NOT_IMPLEMENTED'
      | 'NOT_MODIFIED'
      | 'NO_CONTENT'
      | 'OK'
      | 'PARTIAL_CONTENT'
      | 'PAYLOAD_TOO_LARGE'
      | 'PAYMENT_REQUIRED'
      | 'PERMANENT_REDIRECT'
      | 'PRECONDITION_FAILED'
      | 'PRECONDITION_REQUIRED'
      | 'PROCESSING'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'REQUEST_TIMEOUT'
      | 'REQUEST_URI_TOO_LONG'
      | 'RESET_CONTENT'
      | 'SEE_OTHER'
      | 'SERVICE_UNAVAILABLE'
      | 'SWITCHING_PROTOCOLS'
      | 'TEMPORARY_REDIRECT'
      | 'TOO_EARLY'
      | 'TOO_MANY_REQUESTS'
      | 'UNAUTHORIZED'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'UNPROCESSABLE_ENTITY'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'UPGRADE_REQUIRED'
      | 'URI_TOO_LONG'
      | 'USE_PROXY'
      | 'VARIANT_ALSO_NEGOTIATES';
    view?: View;
    viewName?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageInterfaceInfo = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: InterfaceInfo[];
    searchCount?: boolean;
    size?: string;
    total?: string;
  };

  type PageUser = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: User[];
    searchCount?: boolean;
    size?: string;
    total?: string;
  };

  type PageUserInterfaceInfo = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: UserInterfaceInfo[];
    searchCount?: boolean;
    size?: string;
    total?: string;
  };

  type PageUserVO = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: UserVO[];
    searchCount?: boolean;
    size?: string;
    total?: string;
  };

  type User = {
    accessKey?: string;
    createTime?: string;
    id?: string;
    isDelete?: number;
    secretKey?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserInterfaceInfo = {
    createTime?: string;
    id?: string;
    interfaceInfoId?: string;
    isDelete?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
    updateTime?: string;
    userId?: string;
  };

  type UserInterfaceInfoAddRequest = {
    interfaceInfoId?: string;
    leftNum?: number;
    totalNum?: number;
    userId?: string;
  };

  type UserInterfaceInfoUpdateRequest = {
    id?: string;
    leftNum?: number;
    status?: number;
    totalNum?: number;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: string;
    id?: string;
    pageSize?: string;
    sortField?: string;
    sortOrder?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type View = {
    contentType?: string;
  };
}
