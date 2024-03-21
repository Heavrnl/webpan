/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50529
 Source Host           : localhost:3306
 Source Schema         : pan

 Target Server Type    : MySQL
 Target Server Version : 50529
 File Encoding         : 65001

 Date: 20/03/2024 20:39:07
*/
CREATE DATABASE IF NOT EXISTS pan;
USE pan;


SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for email_code
-- ----------------------------
DROP TABLE IF EXISTS `email_code`;
CREATE TABLE `email_code`  (
  `email` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '邮箱',
  `code` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '编号',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `status` tinyint(1) NULL DEFAULT NULL COMMENT '0:未使用  1:已使用',
  PRIMARY KEY (`email`, `code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '邮箱验证码' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of email_code
-- ----------------------------
INSERT INTO `email_code` VALUES ('', '50015', '2024-03-07 13:23:35', 0);
INSERT INTO `email_code` VALUES ('2956835549@qq.com', '92717', '2024-03-12 00:05:47', 1);
INSERT INTO `email_code` VALUES ('qunkily@gmail.com', '16837', '2024-03-07 16:36:14', 1);
INSERT INTO `email_code` VALUES ('qunkily@gmail.com', '42391', '2024-03-08 18:10:19', 1);
INSERT INTO `email_code` VALUES ('qunkily@gmail.com', '60704', '2024-03-07 13:35:00', 1);

-- ----------------------------
-- Table structure for file_info
-- ----------------------------
DROP TABLE IF EXISTS `file_info`;
CREATE TABLE `file_info`  (
  `file_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文件ID',
  `user_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户ID',
  `file_md5` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'md5值，第一次上传记录',
  `file_pid` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '父级ID',
  `file_size` bigint(20) NULL DEFAULT NULL COMMENT '文件大小',
  `file_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文件名称',
  `file_cover` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '封面',
  `file_path` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文件路径',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `last_update_time` datetime NULL DEFAULT NULL COMMENT '最后更新时间',
  `folder_type` tinyint(1) NULL DEFAULT NULL COMMENT '0:文件 1:目录',
  `file_category` tinyint(1) NULL DEFAULT NULL COMMENT '1:视频 2:音频  3:图片 4:文档 5:其他',
  `file_type` tinyint(1) NULL DEFAULT NULL COMMENT ' 1:视频 2:音频  3:图片 4:pdf 5:doc 6:excel 7:txt 8:code 9:zip 10:其他',
  `status` tinyint(1) NULL DEFAULT NULL COMMENT '0:转码中 1转码失败 2:转码成功',
  `recovery_time` datetime NULL DEFAULT NULL COMMENT '回收站时间',
  `del_flag` tinyint(1) NULL DEFAULT 2 COMMENT '删除标记 0:删除  1:回收站  2:正常',
  PRIMARY KEY (`file_id`, `user_id`) USING BTREE,
  INDEX `idx_create_time`(`create_time`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE,
  INDEX `idx_md5`(`file_md5`) USING BTREE,
  INDEX `idx_file_pid`(`file_pid`) USING BTREE,
  INDEX `idx_del_flag`(`del_flag`) USING BTREE,
  INDEX `idx_recovery_time`(`recovery_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文件信息' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of file_info
-- ----------------------------
INSERT INTO `file_info` VALUES ('UtrRcxA7Zr', '3038837947', '7dee99b3c159d51d222560f88bc241c1', '0', 6790723, '已压dwtirvxlgb.jpg', '202403/3038837947UtrRcxA7Zr_.jpg', '202403/3038837947UtrRcxA7Zr.jpg', '2024-03-20 16:10:18', '2024-03-20 16:10:18', 0, 3, 3, 2, NULL, 2);

-- ----------------------------
-- Table structure for file_share
-- ----------------------------
DROP TABLE IF EXISTS `file_share`;
CREATE TABLE `file_share`  (
  `share_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '分享ID',
  `file_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文件ID',
  `user_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户ID',
  `valid_type` tinyint(1) NULL DEFAULT NULL COMMENT '有效期类型 0:1天 1:7天 2:30天 3:永久有效',
  `expire_time` datetime NULL DEFAULT NULL COMMENT '失效时间',
  `share_time` datetime NULL DEFAULT NULL COMMENT '分享时间',
  `code` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '提取码',
  `show_count` int(11) NULL DEFAULT 0 COMMENT '浏览次数',
  PRIMARY KEY (`share_id`) USING BTREE,
  INDEX `idx_file_id`(`file_id`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE,
  INDEX `idx_share_time`(`share_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '分享信息' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `user_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户ID',
  `nick_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '昵称',
  `email` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `join_time` datetime NULL DEFAULT NULL COMMENT '账号创建时间',
  `last_login_time` datetime NULL DEFAULT NULL COMMENT '最后登录时间',
  `status` tinyint(4) NULL DEFAULT NULL COMMENT '0:禁用 1:正常',
  `used_space` bigint(20) NULL DEFAULT 0 COMMENT '使用空间单位byte',
  `total_space` bigint(20) NULL DEFAULT NULL COMMENT '总空间',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `key_email`(`email`) USING BTREE,
  UNIQUE INDEX `key_nick_name`(`nick_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户信息' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('3038837947', '2956835549', '2956835549@qq.com', 'a0222d70fe09c2a5f6b3e917c691a186', '2024-03-07 16:37:32', '2024-03-20 16:10:10', 1, 6790723, 10737418240);

SET FOREIGN_KEY_CHECKS = 1;

