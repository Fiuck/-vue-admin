const menuList = {
    "data": [
        {
            "id": 0,
            "authName": "首页",
            "path": "/",
            "icon": "iconfont icon-home",
            "children": [],
            "order": 1
        },
        {
            "id": 125,
            "authName": "用户管理",
            "path": "users",
            "icon": "iconfont icon-yonghu",
            "children": [
                {
                    "id": 110,
                    "authName": "用户列表",
                    "path": "users",
                    "children": [],
                    "order": null
                }
            ],
            "order": 2
        },
        {
            "id": 103,
            "authName": "权限管理",
            "path": "rights",
            "icon": "iconfont icon-lock",
            "children": [
                {
                    "id": 111,
                    "authName": "角色列表",
                    "path": "roles",
                    "children": [],
                    "order": null
                },
                {
                    "id": 112,
                    "authName": "权限列表",
                    "path": "rights",
                    "children": [],
                    "order": null
                }
            ],
            "order": 3
        },
        {
            "id": 101,
            "authName": "商品管理",
            "path": "goods",
            "icon": "iconfont icon-goodsfill",
            "children": [
                {
                    "id": 104,
                    "authName": "商品列表",
                    "path": "goods",
                    "children": [],
                    "order": 1
                },
                {
                    "id": 115,
                    "authName": "分类参数",
                    "path": "params",
                    "children": [],
                    "order": 2
                },
                {
                    "id": 121,
                    "authName": "商品分类",
                    "path": "categories",
                    "children": [],
                    "order": 3
                }
            ],
            "order": 4
        },
        {
            "id": 102,
            "authName": "订单管理",
            "path": "orders",
            "icon": "iconfont icon-order",
            "children": [
                {
                    "id": 107,
                    "authName": "订单列表",
                    "path": "orders",
                    "children": [],
                    "order": null
                }
            ],
            "order": 5
        },
        {
            "id": 145,
            "authName": "数据统计",
            "path": "reports",
            "icon": "iconfont icon-DataHistogram",
            "children": [
                {
                    "id": 146,
                    "authName": "数据报表",
                    "path": "reports",
                    "children": [],
                    "order": null
                }
            ],
            "order": 6
        }
    ],
    "meta": {
        "msg": "获取菜单列表成功",
        "status": 200
    }
}
export default menuList