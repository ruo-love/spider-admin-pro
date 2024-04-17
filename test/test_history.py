# -*- coding: utf-8 -*-

from spider_admin_pro.model import ScheduleHistoryModel
import unittest


class HistoryTest(unittest.TestCase):
    def test_insert(self):
        history = ScheduleHistoryModel(project="project", spider="baidu", schedule_job_id="1", spider_job_id="1")
        history.save()

    def test_query(self):
        rows = ScheduleHistoryModel.select().order_by(HistoryModel.create_time.desc()).paginate(1, 10).dicts()

        # rows = HistoryModel
        # print(list(rows))
        # session.commit()

