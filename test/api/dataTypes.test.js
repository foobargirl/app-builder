import 'test/enzyme-init';
import {
  postDataType,
  putDataType,
  deleteDataType,
  getDataType,
  getDataTypes,
  getAttributeFromDataType,
  deleteAttributeFromDataType,
  postAttributeFromDataType,
  putAttributeFromDataType,
  getDataTypeAttributes,
  getDataTypeAttribute,
  moveAttributeUp,
  moveAttributeDown,
  getDataTypesStatus,
  postDataTypesStatus,
  postRefreshDataTypes,
} from 'api/dataTypes';

import { makeRequest, METHODS } from '@entando/apimanager';

import {
  DATA_TYPES,
  DATA_TYPES_DELETE_OK,
  ATTRIBUTE_DATA_TYPES_DELETE_OK,
  DATA_TYPES_OK_PAGE_1,
  DATA_TYPES_ATTRIBUTES,
  DATA_TYPE_ATTRIBUTE,
  ATTRIBUTE_MOVE_UP,
  ATTRIBUTE_MOVE_DOWN,
  DATA_TYPE_REFERENCES_STATUS,
  DATA_TYPE_RELOAD_REFERENCES_STATUS,
} from 'test/mocks/dataTypes';

const correctRequest = {
  uri: '/api/dataTypes',
  method: METHODS.GET,
  mockResponse: DATA_TYPES_OK_PAGE_1,
  useAuthentication: true,
};


jest.unmock('api/dataTypes');
jest.mock('@entando/apimanager', () => ({
  makeRequest: jest.fn(() => new Promise(resolve => resolve({}))),
  METHODS: {
    GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE',
  },
}));

describe('api/getDataTypesStatus', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('returns a promise', () => {
    expect(getDataTypesStatus()).toBeInstanceOf(Promise);
  });

  it('if successful, returns a mock ok response', () => {
    getDataTypesStatus();
    expect(makeRequest).toHaveBeenCalledWith({
      uri: '/api/dataTypesStatus',
      method: 'GET',
      mockResponse: DATA_TYPE_REFERENCES_STATUS,
      useAuthentication: true,
    });
  });
});

describe('api/postDataTypesStatus', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('returns a promise', () => {
    expect(postDataTypesStatus([])).toBeInstanceOf(Promise);
  });

  it('if successful, returns a mock ok response', () => {
    postDataTypesStatus([]);
    expect(makeRequest).toHaveBeenCalledWith({
      uri: '/api/dataTypesStatus',
      body: [],
      method: 'POST',
      mockResponse: DATA_TYPE_RELOAD_REFERENCES_STATUS,
      useAuthentication: true,
    });
  });
});

describe('api/postRefreshDataTypes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('returns a promise', () => {
    expect(postRefreshDataTypes('AAA')).toBeInstanceOf(Promise);
  });

  it('if successful, returns a mock ok response', () => {
    postRefreshDataTypes('AAA');
    expect(makeRequest).toHaveBeenCalledWith({
      uri: '/api/dataTypes/refresh/AAA',
      body: { dataTypeCode: 'AAA' },
      method: 'POST',
      mockResponse: { dataTypeCode: 'AAA' },
      useAuthentication: true,
    });
  });
});


describe('api/postDataType', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('returns a promise', () => {
    expect(postDataType()).toBeInstanceOf(Promise);
  });

  it('if successful, returns a mock ok response', () => {
    postDataType(DATA_TYPES);
    expect(makeRequest).toHaveBeenCalledWith({
      ...correctRequest,
      method: 'POST',
      mockResponse: DATA_TYPES,
      body: DATA_TYPES,
    });
  });
});

describe('api/putDataType', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('returns a promise', () => {
    expect(putDataType(DATA_TYPES)).toBeInstanceOf(Promise);
  });

  it('if successful, returns a mock ok response', () => {
    putDataType(DATA_TYPES);
    expect(makeRequest).toHaveBeenCalledWith({
      ...correctRequest,
      uri: '/api/dataTypes/AAA',
      method: 'PUT',
      mockResponse: DATA_TYPES,
      body: DATA_TYPES,
    });
  });
});

describe('api/getDataType', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('returns a promise', () => {
    expect(getDataType('AAA')).toBeInstanceOf(Promise);
  });

  it('if successful, returns a mock ok response', () => {
    getDataType('AAA');
    expect(makeRequest).toHaveBeenCalledWith({
      ...correctRequest,
      uri: '/api/dataTypes/AAA',
      method: 'GET',
      mockResponse: DATA_TYPES,
    });
  });
});


describe('api/deleteDataType', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('returns a promise', () => {
    expect(deleteDataType('AAA')).toBeInstanceOf(Promise);
  });

  it('if successful, returns a mock ok response', () => {
    deleteDataType('AAA');
    expect(makeRequest).toHaveBeenCalledWith({
      ...correctRequest,
      uri: '/api/dataTypes/AAA',
      method: 'DELETE',
      mockResponse: DATA_TYPES_DELETE_OK,
      body: 'AAA',
    });
  });
});

describe('/api/dataTypes/', () => {
  describe('getAttributeFromDataType', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('returns a promise', () => {
      expect(getAttributeFromDataType()).toBeInstanceOf(Promise);
    });

    it('if successful, returns a mock ok response', () => {
      getAttributeFromDataType('AAA', 'code');
      expect(makeRequest).toHaveBeenCalledWith({
        ...correctRequest,
        uri: '/api/dataTypes/AAA/attribute/code',
        mockResponse: DATA_TYPES.attributes[0],
      });
    });
  });

  describe('deleteAttributeFromDataType', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('returns a promise', () => {
      expect(deleteAttributeFromDataType()).toBeInstanceOf(Promise);
    });

    it('if successful, returns a mock ok response', () => {
      deleteAttributeFromDataType('AAA', 'code');
      expect(makeRequest).toHaveBeenCalledWith({
        ...correctRequest,
        uri: '/api/dataTypes/AAA/attribute/code',
        method: 'DELETE',
        mockResponse: ATTRIBUTE_DATA_TYPES_DELETE_OK,
      });
    });
  });

  describe('postAttributeFromDataType', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('returns a promise', () => {
      expect(postAttributeFromDataType()).toBeInstanceOf(Promise);
    });

    it('if successful, returns a mock ok response', () => {
      postAttributeFromDataType('AAA', DATA_TYPES.attributes[0]);
      expect(makeRequest).toHaveBeenCalledWith({
        ...correctRequest,
        uri: '/api/dataTypes/AAA/attribute',
        method: 'POST',
        body: DATA_TYPES.attributes[0],
        mockResponse: DATA_TYPES.attributes[0],
      });
    });
  });

  describe('putAttributeFromDataType', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('returns a promise', () => {
      expect(putAttributeFromDataType('AAA', DATA_TYPES.attributes[0])).toBeInstanceOf(Promise);
    });

    it('if successful, returns a mock ok response', () => {
      putAttributeFromDataType('AAA', DATA_TYPES.attributes[0]);
      expect(makeRequest).toHaveBeenCalledWith({
        ...correctRequest,
        uri: '/api/dataTypes/AAA/attribute/attrCode',
        method: 'PUT',
        body: DATA_TYPES.attributes[0],
        mockResponse: DATA_TYPES.attributes[0],
      });
    });
  });
});

describe('api/getDataTypes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getDataTypes', () => {
    it('returns a promise', () => {
      expect(getDataTypes()).toBeInstanceOf(Promise);
    });

    it('get fragment page 1 by default', () => {
      getDataTypes({ page: 1, pageSize: 10 });
      expect(makeRequest).toHaveBeenCalledWith(
        correctRequest,
        {
          page: 1,
          pageSize: 10,
        },
      );
    });

    it('request page 2', () => {
      getDataTypes({ page: 2, pageSize: 10 });
      expect(makeRequest).toHaveBeenCalledWith(
        correctRequest,
        {
          page: 2,
          pageSize: 10,
        },
      );
    });

    it('request different page size', () => {
      getDataTypes({ page: 1, pageSize: 5 });
      expect(makeRequest).toHaveBeenCalledWith(
        correctRequest,
        {
          page: 1,
          pageSize: 5,
        },
      );
    });
    it('makes the request with additional params', () => {
      getDataTypes({ page: 1, pageSize: 10 }, '?param=true');
      expect(makeRequest).toHaveBeenCalledWith(
        {
          ...correctRequest,
          uri: '/api/dataTypes?param=true',
        },
        {
          page: 1,
          pageSize: 10,
        },
      );
    });
  });

  describe('api/getDataTypeAttributes', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe('getDataTypeAttributes', () => {
      it('returns a promise', () => {
        expect(getDataTypeAttributes()).toBeInstanceOf(Promise);
      });

      it('if successful, returns a attributes response', () => {
        getDataTypeAttributes();
        expect(makeRequest).toHaveBeenCalledWith(
          expect.objectContaining({
            ...correctRequest,
            uri: '/api/dataTypeAttributes',
            mockResponse: DATA_TYPES_ATTRIBUTES,
          }),
          {
            page: 1,
            pageSize: 10,
          },
        );
      });

      it('makes the request with additional params', () => {
        getDataTypeAttributes({ page: 1, pageSize: 10 }, '?param=true');
        expect(makeRequest).toHaveBeenCalledWith(
          expect.objectContaining({
            ...correctRequest,
            uri: '/api/dataTypeAttributes?param=true',
            mockResponse: DATA_TYPES_ATTRIBUTES,
          }),
          {
            page: 1,
            pageSize: 10,
          },
        );
      });
    });
  });
  describe('api/dataTypeAttributes', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    describe('getDataTypeAttributes', () => {
      it('returns a promise', () => {
        expect(getDataTypeAttribute()).toBeInstanceOf(Promise);
      });

      it('if successful, returns a attributes response', () => {
        getDataTypeAttribute('code');
        expect(makeRequest).toHaveBeenCalledWith(expect.objectContaining({
          ...correctRequest,
          uri: '/api/dataTypeAttributes/code',
          mockResponse: DATA_TYPE_ATTRIBUTE,
        }));
      });
    });
  });
  describe('moveAttributeUp', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('returns a promise', () => {
      expect(moveAttributeUp()).toBeInstanceOf(Promise);
    });

    it('if successful, returns a move up comfirm', () => {
      moveAttributeUp('dataType_code', 'attribute_code');
      expect(makeRequest).toHaveBeenCalledWith(expect.objectContaining({
        ...correctRequest,
        body: {},
        method: METHODS.PUT,
        uri: '/api/dataTypes/dataType_code/attribute/attribute_code/moveUp',
        mockResponse: ATTRIBUTE_MOVE_UP,
      }));
    });
  });

  describe('moveAttributeUp', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('returns a promise', () => {
      expect(moveAttributeDown()).toBeInstanceOf(Promise);
    });

    it('if successful, returns a move up comfirm', () => {
      moveAttributeDown('dataType_code', 'attribute_code');
      expect(makeRequest).toHaveBeenCalledWith(expect.objectContaining({
        ...correctRequest,
        body: {},
        method: METHODS.PUT,
        uri: '/api/dataTypes/dataType_code/attribute/attribute_code/moveDown',
        mockResponse: ATTRIBUTE_MOVE_DOWN,
      }));
    });
  });
});
