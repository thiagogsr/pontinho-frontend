import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import copy from "copy-to-clipboard";
import { Button, Copy, Column, Container, Row, Table, Title } from "./styled";

const Game = () => {
  const [copyButton, setCopyButton] = useState("copiar");
  const { gameId } = useParams();

  return (
    <Container>
      <Title>Pontinho</Title>

      <div>
        <strong>Código:</strong> {gameId}
        <Copy
          onClick={() =>
            copy(gameId, {
              onCopy: () => {
                setCopyButton("copiado");
                setTimeout(() => setCopyButton("copiar"), 3000);
              },
            })
          }
        >
          {copyButton}
        </Copy>
      </div>

      <Button>Iniciar partida</Button>

      <Title>Tabela de aposta</Title>
      <Table cellSpacing="0">
        <thead>
          <Row>
            <Column header>Sem X</Column>
            <Column header>X</Column>
            <Column header>XX</Column>
            <Column header>XXX</Column>
            <Column header>XXXX</Column>
            <Column header>XXXXX</Column>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Column>50</Column>
            <Column>100</Column>
            <Column>200</Column>
            <Column>400</Column>
            <Column>800</Column>
            <Column>1600</Column>
          </Row>
        </tbody>
      </Table>

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

export default connect()(Game);
