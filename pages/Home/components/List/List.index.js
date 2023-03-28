import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Badge, Card, Col, Input, Row } from "antd";
import "./List.index.scss";

const List = ({ info = [], handleSearch, setLoading }) => {
  return (
    <section className="list-container">
      <Row className="list-header">
        <Badge count={info.length} showZero color="#4991D5" />
        <Input
          className="list-input"
          placeholder="Filter podcasts..."
          onChange={(e) => handleSearch({ str: e.target.value })}
        />
      </Row>
      <Row gutter={16}>
        {info.map((data) => {
          return (
            <Col span={4} className="podcast-item">
              <Avatar
                className="podcast-avatar"
                size={64}
                src={data["im:image"][1].label}
              />
              <Link
                to={`/podcast/${data.id.attributes["im:id"]}`}
                state={{
                  summary: data.summary.label,
                  img: data["im:image"][2].label,
                  author: data["im:artist"].label,
                }}
                onClick={() => setLoading(true)}
              >
                <Card
                  title={
                    data["im:name"].label.length > 20
                      ? `${data["im:name"].label.substring(0, 15)}...`
                      : data["im:name"].label
                  }
                  bordered={false}
                >
                  <h5>Author: {data["im:artist"].label}</h5>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default List;
