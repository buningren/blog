- FROM：对FROM子句中的左表<left_table>和右表<right_table>执行笛卡尔积，产生虚拟表VT1

- ON：对虚拟表VT1应用ON筛选，只有那些符合<join_condition>的行才被插入虚拟表VT2中

- JOIN：如果指定了OUTER JOIN（如LEFT OUTER JOIN ，RIGTH OUTER JOIN），那么保留表中未匹配的行作为外部行添加到虚拟表VT2中，产生虚拟表VT3。如果FROM子句含两个以上表，则对上一个连接生成的结果表VT3和下一个表重复执行步骤1~步骤3，直到处理完所有的表为止

- WHERE：	对虚拟表VT3应用VT3应用WEHRE过滤条件，只有符合<where_conditon>的记录才被插入虚拟表VT4中

- GROUP BY：根据GROUP BY 子句中的列，对VT4中的记录进行分组操作，产生VT5

- CUBE|ROLLUP：对表VT5进行CUBE或ROLLUP操作，产生表VT6

- HAVING：对虚拟表VT6应用HAVING过滤器，只有符合<having_condition>的记录才被插入虚拟表VT7中

- SELECT：选定指定的列，插入到虚拟表VT8中

- DISTINCT：去除重复数据，产生虚拟表VT9

- ORDER BY：将虚拟表VT9中的记录按照<order_by_list>进行排序操作，产生虚拟表VT10

- LIMIT：取出指定行的数据，产生虚拟表VT11，并返回给查询用户