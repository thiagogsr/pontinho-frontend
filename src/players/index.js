import React from "react";
import { useParams } from "react-router-dom";
import { Button, Column, Container, Row, Table, Title } from "./styled";

export default () => {
  const { gameId } = useParams();

  return (
    <Container>
      <div>
        Código do jogo: <small>{gameId}</small>
      </div>

      <Button>Iniciar partida</Button>

      <Title>Jogadores</Title>

      <Table cellSpacing="0">
        <thead>
          <Row>
            <Column header>Thiago</Column>
            <Column header>Priscilla</Column>
            <Column header>Neto</Column>
            <Column header>Emilly</Column>
            <Column header>Marquito</Column>
            <Column header>Tay</Column>
            <Column header>Cartas</Column>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Column>99</Column>
            <Column>99</Column>
            <Column>99</Column>
            <Column>99</Column>
            <Column>99</Column>
            <Column>99</Column>
            <Column></Column>
          </Row>
          <Row>
            <Column>9</Column>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
            <Column>13</Column>
            <Column>14</Column>
            <Column>Thiago</Column>
          </Row>
          <Row>
            <Column>9</Column>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
            <Column>13</Column>
            <Column>14</Column>
            <Column></Column>
          </Row>
          <Row>
            <Column>9</Column>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
            <Column>13</Column>
            <Column>14</Column>
            <Column>Thiago</Column>
          </Row>
          <Row>
            <Column>9</Column>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
            <Column>13</Column>
            <Column>14</Column>
            <Column></Column>
          </Row>
          <Row>
            <Column>9</Column>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
            <Column>13</Column>
            <Column>14</Column>
            <Column>Thiago</Column>
          </Row>
          <Row>
            <Column>9</Column>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
            <Column>13</Column>
            <Column>14</Column>
            <Column></Column>
          </Row>
          <Row>
            <Column>9</Column>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
            <Column>13</Column>
            <Column>14</Column>
            <Column>Thiago</Column>
          </Row>
          <Row>
            <Column>9</Column>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
            <Column>13</Column>
            <Column>14</Column>
            <Column></Column>
          </Row>
          <Row>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column>Thiago</Column>
          </Row>
        </tbody>
      </Table>
    </Container>
  );
};
