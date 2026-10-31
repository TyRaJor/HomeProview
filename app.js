/* ============================================================
 *  家族树数据 —— 由陈氏宗脉图 PDF 提取整理
 *  每位成员自动分配 UUID v4
 * ============================================================ */

// UUID v4 生成
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/* 成员类型: ancestor(先祖) / male(本族男) / spouse(配偶) / child(子嗣) */
const familyData = {
    name: '陈符公',
    gender: 'male',
    type: 'ancestor',
    children: [
        {
            name: '寅公',
            gender: 'male',
            type: 'ancestor',
        },
        {
            name: '端公',
            gender: 'male',
            type: 'ancestor',
        },
        {
            name: '恭公',
            gender: 'male',
            type: 'ancestor',
            children: [
                {
                    name: '陞公',
                    gender: 'male',
                    type: 'ancestor',
                    children: [
                        {
                            name: '廷璋公',
                            gender: 'male',
                            type: 'ancestor',
                            children: [
                                {
                                    name: '淑公',
                                    gender: 'male',
                                    type: 'ancestor',
                                    children: [
                                        {
                                            name: '绍荣公',
                                            gender: 'male',
                                            type: 'ancestor',
                                        },
                                        {
                                            name: '绍智公',
                                            gender: 'male',
                                            type: 'ancestor',
                                            children: [
                                                {
                                                    name: '居情公',
                                                    gender: 'male',
                                                    type: 'ancestor',
                                                },
                                                {
                                                    name: '居淮公',
                                                    gender: 'male',
                                                    type: 'ancestor',
                                                },
                                                {
                                                    name: '居禄公',
                                                    gender: 'male',
                                                    type: 'ancestor',
                                                    children: [
                                                        {
                                                            name: '所善公',
                                                            gender: 'male',
                                                            type: 'ancestor',
                                                            children: [
                                                                {
                                                                    name: '善昌公',
                                                                    gender: 'male',
                                                                    type: 'ancestor',
                                                                    children: [
                                                                        {
                                                                            name: '陈必汉',
                                                                            gender: 'male',
                                                                            type: 'male',
                                                                            children: [
                                                                                {
                                                                                    name: '陈成',
                                                                                    gender: 'male',
                                                                                    type: 'male',
                                                                                    children: [
                                                                                        {
                                                                                            name: '陈其道',
                                                                                            gender: 'male',
                                                                                            type: 'male',
                                                                                            children: [
                                                                                                {
                                                                                                    name: '陈学和',
                                                                                                    gender: 'male',
                                                                                                    type: 'male',
                                                                                                    children: [
                                                                                                        {
                                                                                                            name: '陈英步',
                                                                                                            gender: 'male',
                                                                                                            type: 'male',
                                                                                                            children: [
                                                                                                                {
                                                                                                                    name: '陈辉佐',
                                                                                                                    gender: 'male',
                                                                                                                    type: 'male',
                                                                                                                    children: [
                                                                                                                        {
                                                                                                                            name: '陈石才',
                                                                                                                            gender: 'male',
                                                                                                                            type: 'male',
                                                                                                                            children: [
                                                                                                                                {
                                                                                                                                    name: '陈石永',
                                                                                                                                    gender: 'male',
                                                                                                                                    type: 'male',
                                                                                                                                    children: [
                                                                                                                                        { name: '张氏', gender: 'female', type: 'spouse' },
                                                                                                                                        {
                                                                                                                                            name: '陈利松',
                                                                                                                                            gender: 'male',
                                                                                                                                            type: 'male',
                                                                                                                                            children: [
                                                                                                                                                { name: '丘氏', gender: 'female', type: 'spouse' },
                                                                                                                                                {
                                                                                                                                                    name: '陈神帯',
                                                                                                                                                    gender: 'male',
                                                                                                                                                    type: 'male',
                                                                                                                                                    children: [
                                                                                                                                                        { name: '丘氏', gender: 'female', type: 'spouse' },
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    name: '陈称娣',
                                                                                                                                                    gender: 'female',
                                                                                                                                                    type: 'child',
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    name: '陈邦井',
                                                                                                                                                    gender: 'male',
                                                                                                                                                    type: 'male',
                                                                                                                                                    children: [
                                                                                                                                                        { name: '张石帯', gender: 'female', type: 'spouse' },
                                                                                                                                                        {
                                                                                                                                                            name: '陈水光',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'male',
                                                                                                                                                            children: [
                                                                                                                                                                { name: '彭石妹', gender: 'female', type: 'spouse' },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈燕平',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈阳春',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'male',
                                                                                                                                                                    children: [
                                                                                                                                                                        { name: '赖间丽', gender: 'female', type: 'spouse' },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈嘉欣',
                                                                                                                                                                            gender: 'female',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈金培',
                                                                                                                                                                            gender: 'male',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈金兰',
                                                                                                                                                                            gender: 'female',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈水源',
                                                                                                                                                                            gender: 'male',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                    ]
                                                                                                                                                                },
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈继妹',
                                                                                                                                                            gender: 'female',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈亚芹',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    name: '陈树林',
                                                                                                                                                    gender: 'male',
                                                                                                                                                    type: 'male',
                                                                                                                                                    children: [
                                                                                                                                                        { name: '洪英娣', gender: 'female', type: 'spouse' },
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    name: '陈凤',
                                                                                                                                                    gender: 'female',
                                                                                                                                                    type: 'child',
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    name: '陈邦会',
                                                                                                                                                    gender: 'male',
                                                                                                                                                    type: 'male',
                                                                                                                                                    children: [
                                                                                                                                                        { name: '陈亚兰', gender: 'female', type: 'spouse' },
                                                                                                                                                        {
                                                                                                                                                            name: '陈会珍',
                                                                                                                                                            gender: 'female',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈金权',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'male',
                                                                                                                                                            children: [
                                                                                                                                                                { name: '卜扬妹', gender: 'female', type: 'spouse' },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈鹏谨',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈鹏习',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'male',
                                                                                                                                                                    children: [
                                                                                                                                                                        { name: '王华楠', gender: 'female', type: 'spouse' },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈震燚',
                                                                                                                                                                            gender: 'male',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                    ]
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈锐达',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'male',
                                                                                                                                                                    children: [
                                                                                                                                                                        { name: '周秋丽', gender: 'female', type: 'spouse' },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈梓铭',
                                                                                                                                                                            gender: 'male',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈梓璇',
                                                                                                                                                                            gender: 'female',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                    ]
                                                                                                                                                                },
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈金祥',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'male',
                                                                                                                                                            children: [
                                                                                                                                                                { name: '丘伍妹', gender: 'female', type: 'spouse' },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈敬东',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'male',
                                                                                                                                                                    children: [
                                                                                                                                                                        { name: '钟燕芳', gender: 'female', type: 'spouse' },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈梓柠',
                                                                                                                                                                            gender: 'female',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                    ]
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈敬韶',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈琳芬',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈文生',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈会娟',
                                                                                                                                                            gender: 'female',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈伟池',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'male',
                                                                                                                                                            children: [
                                                                                                                                                                { name: '陈秀英', gender: 'female', type: 'spouse' },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈钰滢',
                                                                                                                                                                    gender: 'female',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈荣佳',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈奕',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'male',
                                                                                                                                                            children: [
                                                                                                                                                                { name: '王资华', gender: 'female', type: 'spouse' },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈嘉俊',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈嘉伟',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈秋洁',
                                                                                                                                                            gender: 'female',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                            ]
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            name: '陈社清',
                                                                                                                                            gender: 'male',
                                                                                                                                            type: 'male',
                                                                                                                                            children: [
                                                                                                                                                { name: '丘氏', gender: 'female', type: 'spouse' },
                                                                                                                                            ]
                                                                                                                                        },
                                                                                                                                    ]
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    name: '陈石安',
                                                                                                                                    gender: 'male',
                                                                                                                                    type: 'male',
                                                                                                                                    children: [
                                                                                                                                        { name: '丘氏', gender: 'female', type: 'spouse' },
                                                                                                                                        {
                                                                                                                                            name: '陈廷礼',
                                                                                                                                            gender: 'male',
                                                                                                                                            type: 'male',
                                                                                                                                            children: [
                                                                                                                                                { name: '江氏', gender: 'female', type: 'spouse' },
                                                                                                                                                {
                                                                                                                                                    name: '陈石水',
                                                                                                                                                    gender: 'male',
                                                                                                                                                    type: 'male',
                                                                                                                                                    children: [
                                                                                                                                                        { name: '林任娣', gender: 'female', type: 'spouse' },
                                                                                                                                                        {
                                                                                                                                                            name: '陈灶凤',
                                                                                                                                                            gender: 'female',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈国美',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'male',
                                                                                                                                                            children: [
                                                                                                                                                                { name: '卜树英', gender: 'female', type: 'spouse' },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈等雀',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'male',
                                                                                                                                                                    children: [
                                                                                                                                                                        { name: '陈秋云', gender: 'female', type: 'spouse' },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈忆琳',
                                                                                                                                                                            gender: 'male',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈卓然',
                                                                                                                                                                            gender: 'male',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈卓凡',
                                                                                                                                                                            gender: 'male',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                    ]
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈仔起',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'male',
                                                                                                                                                                    children: [
                                                                                                                                                                        { name: '林思思', gender: 'female', type: 'spouse' },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈予馨',
                                                                                                                                                                            gender: 'female',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈梓瞳',
                                                                                                                                                                            gender: 'male',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                    ]
                                                                                                                                                                },
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈国明',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'male',
                                                                                                                                                            children: [
                                                                                                                                                                { name: '邱玉彩', gender: 'female', type: 'spouse' },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈晓柔',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈伟然',
                                                                                                                                                                    gender: 'male',
                                                                                                                                                                    type: 'male',
                                                                                                                                                                    children: [
                                                                                                                                                                        { name: '黄晓淑', gender: 'female', type: 'spouse' },
                                                                                                                                                                        {
                                                                                                                                                                            name: '陈栩骁',
                                                                                                                                                                            gender: 'male',
                                                                                                                                                                            type: 'child',
                                                                                                                                                                        },
                                                                                                                                                                    ]
                                                                                                                                                                },
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                            ]
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            name: '陈庭信',
                                                                                                                                            gender: 'male',
                                                                                                                                            type: 'male',
                                                                                                                                            children: [
                                                                                                                                                { name: '陆金', gender: 'female', type: 'spouse' },
                                                                                                                                                {
                                                                                                                                                    name: '陈玉佩',
                                                                                                                                                    gender: 'male',
                                                                                                                                                    type: 'child',
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    name: '陈社光',
                                                                                                                                                    gender: 'male',
                                                                                                                                                    type: 'male',
                                                                                                                                                    children: [
                                                                                                                                                        { name: '石水凤', gender: 'female', type: 'spouse' },
                                                                                                                                                        {
                                                                                                                                                            name: '陈金理',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈羽银',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈志聪',
                                                                                                                                                            gender: 'female',
                                                                                                                                                            type: 'male',
                                                                                                                                                            children: [
                                                                                                                                                                {
                                                                                                                                                                    name: '陈美燕',
                                                                                                                                                                    gender: 'female',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    name: '陈伙廉',
                                                                                                                                                    gender: 'male',
                                                                                                                                                    type: 'male',
                                                                                                                                                    children: [
                                                                                                                                                        { name: '丘柱娣', gender: 'female', type: 'spouse' },
                                                                                                                                                        {
                                                                                                                                                            name: '陈武碧',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'child',
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            name: '陈国帅',
                                                                                                                                                            gender: 'male',
                                                                                                                                                            type: 'male',
                                                                                                                                                            children: [
                                                                                                                                                                { name: '王春秀', gender: 'female', type: 'spouse' },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈可馨',
                                                                                                                                                                    gender: 'female',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈思佳',
                                                                                                                                                                    gender: 'female',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                                {
                                                                                                                                                                    name: '陈玥萱',
                                                                                                                                                                    gender: 'female',
                                                                                                                                                                    type: 'child',
                                                                                                                                                                },
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    name: '陈爱群',
                                                                                                                                                    gender: 'male',
                                                                                                                                                    type: 'child',
                                                                                                                                                },
                                                                                                                                            ]
                                                                                                                                        },
                                                                                                                                    ]
                                                                                                                                },
                                                                                                                            ]
                                                                                                                        },
                                                                                                                        {
                                                                                                                            name: '陈石秀',
                                                                                                                            gender: 'female',
                                                                                                                            type: 'child',
                                                                                                                        },
                                                                                                                        {
                                                                                                                            name: '陈亚华',
                                                                                                                            gender: 'male',
                                                                                                                            type: 'child',
                                                                                                                        },
                                                                                                                        {
                                                                                                                            name: '陈社妹',
                                                                                                                            gender: 'female',
                                                                                                                            type: 'child',
                                                                                                                        },
                                                                                                                    ]
                                                                                                                },
                                                                                                                {
                                                                                                                    name: '陈辉佑',
                                                                                                                    gender: 'male',
                                                                                                                    type: 'child',
                                                                                                                },
                                                                                                            ]
                                                                                                        },
                                                                                                        {
                                                                                                            name: '陈英清',
                                                                                                            gender: 'male',
                                                                                                            type: 'child',
                                                                                                        },
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    name: '陈学桩',
                                                                                                    gender: 'male',
                                                                                                    type: 'child',
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            name: '陈必济',
                                                                            gender: 'male',
                                                                            type: 'child',
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    name: '善泰公',
                                                                    gender: 'male',
                                                                    type: 'ancestor',
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            name: '所辉公',
                                                            gender: 'male',
                                                            type: 'ancestor',
                                                        },
                                                        {
                                                            name: '所奎公',
                                                            gender: 'male',
                                                            type: 'ancestor',
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: '居信公',
                                                    gender: 'male',
                                                    type: 'ancestor',
                                                },
                                                {
                                                    name: '居爵公',
                                                    gender: 'male',
                                                    type: 'ancestor',
                                                },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: '深公',
                                    gender: 'male',
                                    type: 'ancestor',
                                },
                                {
                                    name: '济公',
                                    gender: 'male',
                                    type: 'ancestor',
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            name: '敬公',
            gender: 'male',
            type: 'ancestor',
        },
    ]
};

/* ============================================================
 *  树形布局算法
 * ============================================================ */
/* 节点尺寸与间距：根据屏幕宽度自适应 */
const isMobile = window.innerWidth < 768;
const NODE_W = isMobile ? 84 : 104;
const NODE_H = isMobile ? 42 : 48;
const H_GAP = isMobile ? 14 : 20;      // 同辈节点间距（防止遮挡）
const V_GAP = isMobile ? 40 : 54;      // 世代间距
const SPOUSE_GAP = isMobile ? 12 : 18; // 夫妻间距

const nodeMap = new Map();   // id -> node data
let allNodes = [];

function buildTree(root) {
    let idCounter = 0;
    function walk(node, parent, generation, branch) {
        const id = 'n' + (idCounter++);
        const n = {
            id,
            name: node.name,
            title: node.title || '',
            type: node.type || 'child',
            gender: node.gender || (node.type === 'spouse' ? 'female' : 'male'),
            parent: parent ? parent.id : null,
            generation,
            branch,
            uuid: uuid(),
            x: 0, y: 0,
            width: NODE_W,
            height: NODE_H,
            children: []
        };
        nodeMap.set(id, n);
        allNodes.push(n);
        if (node.children) {
            const childBranch = (node.type === 'ancestor' || generation <= 5) ? branch : (branch + '-' + id);
            n.children = node.children.map(c => walk(c, n, generation + 1, childBranch));
        }
        return n;
    }
    return walk(root, null, 1, 'main');
}

/* 获取节点的配偶（第一个 type=spouse 的子节点） */
function getSpouse(node) {
    return node.children.find(c => c.type === 'spouse') || null;
}

/* 获取节点的子女（排除配偶） */
function getChildren(node) {
    return node.children.filter(c => c.type !== 'spouse');
}

/* 计算子树宽度 */
function subtreeWidth(node) {
    const spouse = getSpouse(node);
    const kids = getChildren(node);
    const coupleW = spouse ? node.width + SPOUSE_GAP + spouse.width : node.width;

    if (kids.length === 0) return coupleW;

    let total = 0;
    kids.forEach((c, i) => {
        total += subtreeWidth(c);
        if (i < kids.length - 1) total += H_GAP;
    });
    return Math.max(total, coupleW);
}

/* 布局：自上而下，夫妻并排，子女在下方居中于父块
 * allocatedW: 父级分给本节点的区域宽度（不传则自动计算）
 */
function layout(node, x, y, allocatedW) {
    node.y = y;
    const spouse = getSpouse(node);
    const kids = getChildren(node);
    const coupleW = spouse ? node.width + SPOUSE_GAP + spouse.width : node.width;

    // 本节点实际分配到的宽度（关键：与 subtreeWidth 保持一致）
    const sw = (allocatedW != null) ? allocatedW : subtreeWidth(node);

    // ① 夫妻块在分配区域内居中（不再溢出到兄弟区域）
    const coupleLeft = x + (sw - coupleW) / 2;
    node.x = coupleLeft + node.width / 2;
    if (spouse) {
        spouse.y = y;
        spouse.x = node.x + node.width / 2 + SPOUSE_GAP + spouse.width / 2;
    }

    if (kids.length === 0) return;

    // ② 子女总宽
    const childWidths = kids.map(c => subtreeWidth(c));
    let totalW = 0;
    childWidths.forEach((w, i) => {
        totalW += w;
        if (i < childWidths.length - 1) totalW += H_GAP;
    });

    // ③ 子女块同样在分配区域内居中，保证左右都不越界
    let cx = x + (sw - totalW) / 2;
    kids.forEach((c, i) => {
        layout(c, cx, y + V_GAP + NODE_H, childWidths[i]);
        cx += childWidths[i] + H_GAP;
    });
}

/* ============================================================
 *  渲染
 * ============================================================ */
const stage = document.getElementById('stage');
const svgNS = 'http://www.w3.org/2000/svg';
let svg, rootG, defs;
let viewState = { scale: 1, tx: 0, ty: 0 };
let bounds = { minX: 0, maxX: 0, minY: 0, maxY: 0 };

const typeColors = {
    ancestor: { fill: 'url(#gradAncestor)', stroke: 'var(--ancestor-color)', glow: 'var(--ancestor-color)' },
    male: { fill: 'url(#gradMale)', stroke: 'var(--male-color)', glow: 'var(--male-color)' },
    female: { fill: 'url(#gradFemale)', stroke: 'var(--female-color)', glow: 'var(--female-color)' },
    spouse: { fill: 'url(#gradSpouse)', stroke: 'var(--spouse-color)', glow: 'var(--spouse-color)' },
    child: { fill: 'url(#gradChild)', stroke: 'var(--male-color)', glow: 'var(--male-color)' }
};

/* 根据节点类型+性别获取颜色 */
function getNodeColors(node) {
    if (node.type === 'ancestor') return typeColors.ancestor;
    if (node.type === 'spouse') return typeColors.spouse;
    if (node.gender === 'female') return typeColors.female;
    if (node.gender === 'male') return typeColors.male;
    return typeColors.child;
}

function createSvg() {
    svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('id', 'treeSvg');
    defs = document.createElementNS(svgNS, 'defs');
    defs.innerHTML = `
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <linearGradient id="gradAncestor" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="var(--ancestor-color)"/><stop offset="100%" stop-color="var(--ancestor-color-2)"/>
    </linearGradient>
    <linearGradient id="gradMale" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="var(--male-color)"/><stop offset="100%" stop-color="var(--male-color-2)"/>
    </linearGradient>
    <linearGradient id="gradFemale" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="var(--female-color)"/><stop offset="100%" stop-color="var(--female-color-2)"/>
    </linearGradient>
    <linearGradient id="gradSpouse" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="var(--spouse-color)"/><stop offset="100%" stop-color="var(--spouse-color-2)"/>
    </linearGradient>
    <linearGradient id="gradChild" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="var(--male-color)"/><stop offset="100%" stop-color="var(--male-color-2)"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(246,211,101,0.4)"/>
    </marker>
  `;
    svg.appendChild(defs);
    rootG = document.createElementNS(svgNS, 'g');
    rootG.setAttribute('id', 'rootG');
    svg.appendChild(rootG);
    stage.appendChild(svg);
}

function renderEdges(root) {
    const g = document.createElementNS(svgNS, 'g');
    g.setAttribute('class', 'edges');

    function addPath(d, fromId, toId, extraClass) {
        const p = document.createElementNS(svgNS, 'path');
        p.setAttribute('class', 'edge' + (extraClass ? ' ' + extraClass : ''));
        p.setAttribute('d', d);
        p.setAttribute('pathLength', '1');   // 让描线动画对每条边都精确
        p.setAttribute('data-from', fromId);
        p.setAttribute('data-to', toId);
        g.appendChild(p);
    }

    function draw(node) {
        const spouse = getSpouse(node);
        const kids = getChildren(node);

        /* ---------- 婚姻线 ---------- */
        if (spouse) {
            const line = document.createElementNS(svgNS, 'line');
            line.setAttribute('class', 'edge marriage');
            line.setAttribute('x1', node.x + node.width / 2);
            line.setAttribute('y1', node.y);
            line.setAttribute('x2', spouse.x - spouse.width / 2);
            line.setAttribute('y2', spouse.y);
            line.setAttribute('data-from', node.id);
            line.setAttribute('data-to', spouse.id);
            g.appendChild(line);
        }

        /* ---------- 子女 T 型圆角连线 ---------- */
        if (kids.length > 0) {
            const trunkX = spouse ? (node.x + spouse.x) / 2 : node.x;
            const topY = node.y + node.height / 2;                          // 父块底边
            const kidTop = Math.min(...kids.map(k => k.y - k.height / 2));    // 最近子块顶边
            const gap = Math.max(10, kidTop - topY);
            const busY = topY + gap * 0.5;                                  // 横向总线位置
            const maxR = Math.min(12, gap * 0.3);                           // 圆角上限

            // 主干：只画一次，避免多条子路径叠加导致颜色变亮
            addPath(`M ${trunkX} ${topY} L ${trunkX} ${busY}`, node.id, kids[0].id);

            kids.forEach(k => {
                const kx = k.x;
                const ky = k.y - k.height / 2;
                const dx = kx - trunkX;

                if (Math.abs(dx) < 1) {
                    // 子节点正好在正下方：一条竖直直线即可
                    addPath(`M ${trunkX} ${busY} L ${kx} ${ky}`, node.id, k.id);
                } else {
                    const dir = dx > 0 ? 1 : -1;
                    const r = Math.min(maxR, Math.abs(dx) * 0.45, (ky - busY) * 0.5);
                    addPath(
                        `M ${trunkX} ${busY} ` +
                        `H ${kx - dir * r} ` +          // 水平段
                        `Q ${kx} ${busY} ${kx} ${busY + r} ` + // 圆角转下
                        `V ${ky}`,                       // 垂直落到子节点顶部
                        node.id, k.id
                    );
                }
            });
        }

        kids.forEach(draw);
    }

    draw(root);
    rootG.appendChild(g);
}

function renderNodes(root) {
    const g = document.createElementNS(svgNS, 'g');
    g.setAttribute('class', 'nodes');
    let delay = 0;
    function draw(node) {
        const colors = getNodeColors(node);
        const group = document.createElementNS(svgNS, 'g');
        group.setAttribute('class', 'node-group');
        group.setAttribute('data-id', node.id);
        group.setAttribute('transform', `translate(${node.x}, ${node.y})`);
        group.style.animationDelay = (delay * 0.03) + 's';
        delay++;

        // 阴影
        const shadow = document.createElementNS(svgNS, 'rect');
        shadow.setAttribute('class', 'node-shadow');
        shadow.setAttribute('x', -node.width / 2 + 3);
        shadow.setAttribute('y', -node.height / 2 + 5);
        shadow.setAttribute('width', node.width);
        shadow.setAttribute('height', node.height);
        shadow.setAttribute('rx', 14);
        shadow.setAttribute('fill', 'rgba(0,0,0,0.4)');
        shadow.setAttribute('filter', 'blur(6px)');
        group.appendChild(shadow);

        // 背景
        const rect = document.createElementNS(svgNS, 'rect');
        rect.setAttribute('class', 'node-bg');
        rect.setAttribute('x', -node.width / 2);
        rect.setAttribute('y', -node.height / 2);
        rect.setAttribute('width', node.width);
        rect.setAttribute('height', node.height);
        rect.setAttribute('rx', 14);
        rect.setAttribute('fill', colors.fill);
        rect.setAttribute('stroke', colors.stroke);
        rect.setAttribute('stroke-width', 1.5);
        group.appendChild(rect);

        // 姓名
        const name = document.createElementNS(svgNS, 'text');
        name.setAttribute('class', 'node-label');
        name.setAttribute('y', node.type === 'ancestor' ? 4 : 2);
        name.textContent = node.name;
        group.appendChild(name);

        // 标题/世代
        if (node.title) {
            const sub = document.createElementNS(svgNS, 'text');
            sub.setAttribute('class', 'node-sub');
            sub.setAttribute('y', 22);
            sub.textContent = node.title;
            group.appendChild(sub);
        } else {
            const sub = document.createElementNS(svgNS, 'text');
            sub.setAttribute('class', 'node-sub');
            sub.setAttribute('y', 22);
            sub.textContent = '第 ' + node.generation + ' 代';
            group.appendChild(sub);
        }

        // 类型圆点
        const dot = document.createElementNS(svgNS, 'circle');
        dot.setAttribute('cx', node.width / 2 - 12);
        dot.setAttribute('cy', -node.height / 2 + 12);
        dot.setAttribute('r', 4);
        dot.setAttribute('fill', colors.stroke);
        group.appendChild(dot);

        group.addEventListener('click', (e) => {
            e.stopPropagation();
            selectNode(node.id);
        });
        group.addEventListener('mouseenter', () => highlightPath(node.id));
        group.addEventListener('mouseleave', () => clearHighlight());

        g.appendChild(group);
        node.children.forEach(draw);
    }
    draw(root);
    rootG.appendChild(g);
}

/* 渲染世代坐标轴标签（左侧） */
function renderGenLabels(root) {
    const genY = new Map();
    function walk(n) {
        if (!genY.has(n.generation)) genY.set(n.generation, n.y);
        n.children.forEach(walk);
    }
    walk(root);

    const g = document.createElementNS(svgNS, 'g');
    g.setAttribute('class', 'gen-labels');
    const x = bounds.minX - 60;

    genY.forEach((y, gen) => {
        const bg = document.createElementNS(svgNS, 'rect');
        bg.setAttribute('x', x - 34);
        bg.setAttribute('y', y - 14);
        bg.setAttribute('width', 68);
        bg.setAttribute('height', 28);
        bg.setAttribute('rx', 14);
        bg.setAttribute('fill', 'rgba(246, 211, 101, 0.08)');
        bg.setAttribute('stroke', 'rgba(246, 211, 101, 0.25)');
        g.appendChild(bg);

        const txt = document.createElementNS(svgNS, 'text');
        txt.setAttribute('x', x);
        txt.setAttribute('y', y + 5);
        txt.setAttribute('text-anchor', 'middle');
        txt.setAttribute('fill', '#f6d365');
        txt.setAttribute('font-size', '13');
        txt.setAttribute('font-weight', '600');
        txt.textContent = '第' + gen + '代';
        g.appendChild(txt);

        const line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', x + 36);
        line.setAttribute('y1', y);
        line.setAttribute('x2', bounds.minX - 4);
        line.setAttribute('y2', y);
        line.setAttribute('stroke', 'rgba(246, 211, 101, 0.12)');
        line.setAttribute('stroke-dasharray', '4 6');
        g.appendChild(line);
    });

    rootG.appendChild(g);
}

function updateBounds(root) {
    bounds = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };
    function walk(n) {
        bounds.minX = Math.min(bounds.minX, n.x - n.width / 2);
        bounds.maxX = Math.max(bounds.maxX, n.x + n.width / 2);
        bounds.minY = Math.min(bounds.minY, n.y - n.height / 2);
        bounds.maxY = Math.max(bounds.maxY, n.y + n.height / 2);
        n.children.forEach(walk);
    }
    walk(root);
}

/* ============================================================
 *  视图变换：缩放 / 平移
 * ============================================================ */
function applyTransform() {
    rootG.setAttribute('transform', `translate(${viewState.tx}, ${viewState.ty}) scale(${viewState.scale})`);
    document.getElementById('zoomIndicator').textContent = Math.round(viewState.scale * 100) + '%';
    updateMinimapViewport();
}

/* ===== 小地图 ===== */
let minimapCtx, minimapRect;
function initMinimap() {
    const canvas = document.getElementById('minimapCanvas');
    minimapCtx = canvas.getContext('2d');
    minimapRect = { w: 220, h: 160 };
    canvas.width = minimapRect.w;
    canvas.height = minimapRect.h;
    drawMinimap();

    const minimap = document.getElementById('minimap');
    minimap.addEventListener('click', (e) => {
        const r = minimap.getBoundingClientRect();
        const mx = (e.clientX - r.left) / r.width;
        const my = (e.clientY - r.top) / r.height;
        const treeW = bounds.maxX - bounds.minX;
        const treeH = bounds.maxY - bounds.minY;
        const wx = bounds.minX + mx * treeW;
        const wy = bounds.minY + my * treeH;
        viewState.tx = window.innerWidth / 2 - wx * viewState.scale;
        viewState.ty = window.innerHeight / 2 - wy * viewState.scale;
        applyTransform();
    });
}

function drawMinimap() {
    if (!minimapCtx) return;
    const { w, h } = minimapRect;
    minimapCtx.clearRect(0, 0, w, h);
    const treeW = bounds.maxX - bounds.minX;
    const treeH = bounds.maxY - bounds.minY;
    if (treeW === 0 || treeH === 0) return;
    const scale = Math.min(w / treeW, h / treeH) * 0.92;
    const offX = (w - treeW * scale) / 2 - bounds.minX * scale;
    const offY = (h - treeH * scale) / 2 - bounds.minY * scale;

    // 画连线
    minimapCtx.strokeStyle = 'rgba(246,211,101,0.25)';
    minimapCtx.lineWidth = 0.5;
    function drawEdges(n) {
        n.children.forEach(c => {
            minimapCtx.beginPath();
            minimapCtx.moveTo(n.x * scale + offX, n.y * scale + offY);
            const my = n.y * scale + offY + (c.y - n.y) * scale * 0.5;
            minimapCtx.bezierCurveTo(
                n.x * scale + offX, my,
                c.x * scale + offX, my,
                c.x * scale + offX, c.y * scale + offY
            );
            minimapCtx.stroke();
            drawEdges(c);
        });
    }
    drawEdges(nodeMap.get('n0'));

    // 画节点
    const cs = getComputedStyle(document.documentElement);
    allNodes.forEach(n => {
        let color;
        if (n.type === 'ancestor') color = cs.getPropertyValue('--ancestor-color').trim() || '#f6d365';
        else if (n.type === 'spouse') color = cs.getPropertyValue('--spouse-color').trim() || '#a78bfa';
        else if (n.gender === 'female') color = cs.getPropertyValue('--female-color').trim() || '#fb7185';
        else color = cs.getPropertyValue('--male-color').trim() || '#5eead4';
        minimapCtx.fillStyle = color;
        minimapCtx.beginPath();
        minimapCtx.arc(n.x * scale + offX, n.y * scale + offY, n.type === 'ancestor' ? 2.2 : 1.4, 0, Math.PI * 2);
        minimapCtx.fill();
    });

    // 存缩放参数供 viewport 使用
    minimapRect.scale = scale;
    minimapRect.offX = offX;
    minimapRect.offY = offY;
}

function updateMinimapViewport() {
    const vp = document.getElementById('minimapViewport');
    if (!minimapRect || minimapRect.scale == null) return;
    const { scale, offX, offY, w, h } = minimapRect;
    // 屏幕可见区域在 SVG 坐标中的范围
    const viewLeft = (0 - viewState.tx) / viewState.scale;
    const viewTop = (0 - viewState.ty) / viewState.scale;
    const viewRight = (window.innerWidth - viewState.tx) / viewState.scale;
    const viewBottom = (window.innerHeight - viewState.ty) / viewState.scale;
    // 转换到 minimap 像素
    const mx = viewLeft * scale + offX;
    const my = viewTop * scale + offY;
    const mw = (viewRight - viewLeft) * scale;
    const mh = (viewBottom - viewTop) * scale;
    vp.style.left = mx + 'px';
    vp.style.top = my + 'px';
    vp.style.width = Math.min(mw, w) + 'px';
    vp.style.height = Math.min(mh, h) + 'px';
}

function fitView() {
    const w = bounds.maxX - bounds.minX;
    const h = bounds.maxY - bounds.minY;
    const padding = isMobile ? 30 : 80;
    const sx = (window.innerWidth - padding * 2) / w;
    const sy = (window.innerHeight - padding * 2) / h;
    viewState.scale = Math.min(sx, sy, isMobile ? 1.0 : 1.2);
    viewState.tx = window.innerWidth / 2 - (bounds.minX + w / 2) * viewState.scale;
    viewState.ty = window.innerHeight / 2 - (bounds.minY + h / 2) * viewState.scale;
    applyTransform();
}

function focusOnRoot(root) {
    const targetScale = 1.0;
    viewState.scale = targetScale;
    viewState.tx = window.innerWidth / 2 - root.x * targetScale;
    viewState.ty = 80 - root.y * targetScale;
    applyTransform();
}

function resetView() {
    const root = nodeMap.get('n0');
    if (root) focusOnRoot(root);
    else { viewState = { scale: 1, tx: 0, ty: 0 }; applyTransform(); }
}

function zoomAt(factor, cx, cy) {
    const minScale = isMobile ? 0.35 : 0.2;
    const maxScale = isMobile ? 3 : 3;
    const oldScale = viewState.scale;
    const newScale = Math.max(minScale, Math.min(maxScale, oldScale * factor));
    const realFactor = newScale / oldScale;
    viewState.tx = cx - (cx - viewState.tx) * realFactor;
    viewState.ty = cy - (cy - viewState.ty) * realFactor;
    viewState.scale = newScale;
    applyTransform();
}

/* 拖拽平移 */
let isDragging = false, dragStart = { x: 0, y: 0 }, viewStart = { tx: 0, ty: 0 };

stage.addEventListener('mousedown', (e) => {
    if (e.target.closest('.node-group')) return;
    isDragging = true;
    stage.classList.add('grabbing');
    dragStart = { x: e.clientX, y: e.clientY };
    viewStart = { tx: viewState.tx, ty: viewState.ty };
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    viewState.tx = viewStart.tx + (e.clientX - dragStart.x);
    viewState.ty = viewStart.ty + (e.clientY - dragStart.y);
    applyTransform();
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    stage.classList.remove('grabbing');
});

stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    zoomAt(factor, e.clientX, e.clientY);
}, { passive: false });

document.getElementById('zoomIn').onclick = () => zoomAt(1.2, window.innerWidth / 2, window.innerHeight / 2);
document.getElementById('zoomOut').onclick = () => zoomAt(1 / 1.2, window.innerWidth / 2, window.innerHeight / 2);
document.getElementById('reset').onclick = resetView;
document.getElementById('fit').onclick = fitView;

/* 触摸支持 */
let touchDist = 0;
stage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        isDragging = true;
        touchMoved = false;
        dragStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        viewStart = { tx: viewState.tx, ty: viewState.ty };
    } else if (e.touches.length === 2) {
        isDragging = false;                       // 双指时停止单指拖拽
        const t0 = e.touches[0], t1 = e.touches[1];
        touchDist = Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY);
        lastCx = (t0.clientX + t1.clientX) / 2;
        lastCy = (t0.clientY + t1.clientY) / 2;
    }
}, { passive: true });

stage.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && isDragging) {
        touchMoved = true;
        viewState.tx = viewStart.tx + (e.touches[0].clientX - dragStart.x);
        viewState.ty = viewStart.ty + (e.touches[0].clientY - dragStart.y);
        applyTransform();
    } else if (e.touches.length === 2) {
        const t0 = e.touches[0], t1 = e.touches[1];
        const d = Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY);
        const cx = (t0.clientX + t1.clientX) / 2;
        const cy = (t0.clientY + t1.clientY) / 2;

        if (touchDist > 0) {
            const factor = d / touchDist;
            // 以“上一帧中心”为锚点缩放
            zoomAt(factor, lastCx, lastCy);
            // 再把内容平移到当前中心，实现“双指拖动 + 缩放”同时生效
            viewState.tx += cx - lastCx;
            viewState.ty += cy - lastCy;
            applyTransform();
        }
        touchDist = d;
        lastCx = cx; lastCy = cy;
    }
}, { passive: true });

stage.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
        isDragging = false;
        touchDist = 0;
    }
}, { passive: true });

/* ============================================================
 *  节点选中 / 高亮路径
 * ============================================================ */
let selectedId = null;

function getAncestorChain(id) {
    const chain = [];
    let cur = nodeMap.get(id);
    while (cur) {
        chain.unshift(cur.id);
        cur = cur.parent ? nodeMap.get(cur.parent) : null;
    }
    return chain;
}

function highlightPath(id) {
    const chain = new Set(getAncestorChain(id));
    document.querySelectorAll('.node-group').forEach(g => {
        const nid = g.getAttribute('data-id');
        if (chain.has(nid)) {
            g.querySelector('.node-bg').style.filter = 'url(#glow)';
        }
    });
    document.querySelectorAll('.edge').forEach(e => {
        if (chain.has(e.getAttribute('data-from')) && chain.has(e.getAttribute('data-to'))) {
            e.style.stroke = 'rgba(246, 211, 101, 0.8)';
            e.style.strokeWidth = '2.5';
        }
    });
}

function clearHighlight() {
    document.querySelectorAll('.node-bg').forEach(r => r.style.filter = '');
    document.querySelectorAll('.edge').forEach(e => {
        e.style.stroke = '';
        e.style.strokeWidth = '';
    });
}

function selectNode(id) {
    selectedId = id;
    const node = nodeMap.get(id);
    if (!node) return;

    // 缩放到可读比例并居中（有配偶时居中到夫妻中点）
    const spouse = getSpouse(node);
    const centerX = spouse ? (node.x + spouse.x) / 2 : node.x;
    const targetScale = Math.max(viewState.scale, 1.0);
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const targetTx = cx - centerX * targetScale;
    const targetTy = cy - node.y * targetScale;
    animateView(targetScale, targetTx, targetTy, 500);

    showDetail(node);
}

/* 平滑动画过渡视图 */
let animFrame = null;
function animateView(targetScale, targetTx, targetTy, duration) {
    if (animFrame) cancelAnimationFrame(animFrame);
    const startScale = viewState.scale;
    const startTx = viewState.tx;
    const startTy = viewState.ty;
    const startTime = performance.now();
    function step(now) {
        const t = Math.min(1, (now - startTime) / duration);
        const e = 1 - Math.pow(1 - t, 3); // easeOutCubic
        viewState.scale = startScale + (targetScale - startScale) * e;
        viewState.tx = startTx + (targetTx - startTx) * e;
        viewState.ty = startTy + (targetTy - startTy) * e;
        applyTransform();
        if (t < 1) animFrame = requestAnimationFrame(step);
        else animFrame = null;
    }
    animFrame = requestAnimationFrame(step);
}

/* ============================================================
 *  详情面板
 * ============================================================ */
const detailPanel = document.getElementById('detailPanel');

function showDetail(node) {
    document.getElementById('dpAvatar').textContent = node.name.charAt(0);
    document.getElementById('dpName').textContent = node.name;
    document.getElementById('dpTitle').textContent = node.title || ('第 ' + node.generation + ' 代 · ' + typeName(node.type));
    document.getElementById('dpUuid').textContent = node.uuid;
    document.getElementById('dpGender').textContent = node.type === 'spouse' ? '配偶' : (node.gender === 'female' ? '女' : '男');
    document.getElementById('dpGen').textContent = '第 ' + node.generation + ' 代';
    document.getElementById('dpBranch').textContent = node.branch;
    const parent = node.parent ? nodeMap.get(node.parent) : null;
    document.getElementById('dpParent').textContent = parent ? parent.name : '— (始祖)';
    const spouse = node.children.find(c => c.type === 'spouse');
    document.getElementById('dpSpouse').textContent = spouse ? spouse.name : '—';
    const kids = node.children.filter(c => c.type !== 'spouse').map(c => c.name);
    document.getElementById('dpChildren').textContent = kids.length ? kids.join('、') : '—';
    detailPanel.classList.add('show');
}

function typeName(t) {
    return { ancestor: '先祖', male: '本族', spouse: '配偶', child: '子嗣' }[t] || '族人';
}

document.getElementById('closeDetail').onclick = () => detailPanel.classList.remove('show');
document.getElementById('copyUuid').onclick = () => {
    const uuidText = document.getElementById('dpUuid').textContent;
    navigator.clipboard.writeText(uuidText).then(() => toast('UUID 已复制到剪贴板'));
};

/* 颜色设置面板 */
const settingsPanel = document.getElementById('settingsPanel');
const defaultColors = {
    male: ['#5eead4', '#3b82f6'],
    female: ['#fb7185', '#f472b6'],
    ancestor: ['#f6d365', '#fda085'],
    spouse: ['#a78bfa', '#8b5cf6']
};

document.getElementById('settingsBtn').onclick = () => settingsPanel.classList.toggle('show');
document.getElementById('closeSettings').onclick = () => settingsPanel.classList.remove('show');

function setGenderColor(category, c1, c2) {
    document.documentElement.style.setProperty(`--${category}-color`, c1);
    document.documentElement.style.setProperty(`--${category}-color-2`, c2);
    if (typeof drawMinimap === 'function') drawMinimap();
}

document.getElementById('maleColor').addEventListener('input', e => setGenderColor('male', e.target.value, document.getElementById('maleColor2').value));
document.getElementById('maleColor2').addEventListener('input', e => setGenderColor('male', document.getElementById('maleColor').value, e.target.value));
document.getElementById('femaleColor').addEventListener('input', e => setGenderColor('female', e.target.value, document.getElementById('femaleColor2').value));
document.getElementById('femaleColor2').addEventListener('input', e => setGenderColor('female', document.getElementById('femaleColor').value, e.target.value));
document.getElementById('ancestorColor').addEventListener('input', e => setGenderColor('ancestor', e.target.value, document.getElementById('ancestorColor2').value));
document.getElementById('ancestorColor2').addEventListener('input', e => setGenderColor('ancestor', document.getElementById('ancestorColor').value, e.target.value));
document.getElementById('spouseColor').addEventListener('input', e => setGenderColor('spouse', e.target.value, document.getElementById('spouseColor2').value));
document.getElementById('spouseColor2').addEventListener('input', e => setGenderColor('spouse', document.getElementById('spouseColor').value, e.target.value));

document.getElementById('resetColors').onclick = () => {
    setGenderColor('male', defaultColors.male[0], defaultColors.male[1]);
    setGenderColor('female', defaultColors.female[0], defaultColors.female[1]);
    setGenderColor('ancestor', defaultColors.ancestor[0], defaultColors.ancestor[1]);
    setGenderColor('spouse', defaultColors.spouse[0], defaultColors.spouse[1]);
    document.getElementById('maleColor').value = defaultColors.male[0];
    document.getElementById('maleColor2').value = defaultColors.male[1];
    document.getElementById('femaleColor').value = defaultColors.female[0];
    document.getElementById('femaleColor2').value = defaultColors.female[1];
    document.getElementById('ancestorColor').value = defaultColors.ancestor[0];
    document.getElementById('ancestorColor2').value = defaultColors.ancestor[1];
    document.getElementById('spouseColor').value = defaultColors.spouse[0];
    document.getElementById('spouseColor2').value = defaultColors.spouse[1];
    toast('颜色已恢复默认');
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { detailPanel.classList.remove('show'); settingsPanel.classList.remove('show'); }
});

/* ============================================================
 *  搜索
 * ============================================================ */
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    if (!q) { searchResults.classList.remove('show'); return; }
    const matches = allNodes.filter(n => n.name.includes(q)).slice(0, 12);
    if (matches.length === 0) {
        searchResults.innerHTML = '<div class="item"><span style="color:var(--ink-dim)">未找到相关族人</span></div>';
    } else {
        searchResults.innerHTML = matches.map(n => {
            const tag = n.type === 'spouse' ? '配偶' : (n.gender === 'female' ? '女' : '男');
            return `<div class="item" data-id="${n.id}">
        <span class="dot" style="background:${getNodeColors(n).stroke}"></span>
        <span class="name">${n.name}</span>
        <span class="meta">第${n.generation}代 · ${tag}</span>
      </div>`;
        }).join('');
    }
    searchResults.classList.add('show');
});

searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.item[data-id]');
    if (!item) return;
    selectNode(item.getAttribute('data-id'));
    searchResults.classList.remove('show');
    searchInput.value = '';
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) searchResults.classList.remove('show');
});

/* ============================================================
 *  Toast
 * ============================================================ */
const toastEl = document.getElementById('toast');
let toastTimer;
function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2000);
}

/* ============================================================
 *  初始化
 * ============================================================ */
function init() {
    createSvg();
    const root = buildTree(familyData);
    layout(root, 0, 0);
    updateBounds(root);
    renderEdges(root);
    renderNodes(root);
    renderGenLabels(root);
    initMinimap();

    // 统计
    const genMax = Math.max(...allNodes.map(n => n.generation));
    document.getElementById('stats').innerHTML =
        `族人 <b>${allNodes.length}</b> · 世代 <b>${genMax}</b> ·  UUID 已分配`;

    // 初始视图：聚焦始祖（可读比例），用户可通过搜索/小地图导航
    setTimeout(() => {
        focusOnRoot(root);
        drawMinimap();
        document.getElementById('loader').classList.add('hidden');
    }, 300);
}

window.addEventListener('load', init);
window.addEventListener('resize', () => { /* keep view */ });